import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { DataSource } from 'typeorm';

import { AppModule } from '../src/app.module';

import { BoardStatus } from '@/api-interfaces';
import type { IAuth } from '@/api-interfaces/structures/auth.structure';

// NOTE: 앱이 커지면 모듈별로 e2e를 분리하고 이 파일에는 전체 프로젝트의 흐름을 파악할 수 있는 e2e 테스트를 넣어야함
describe('AppController (e2e)', () => {
  let app: INestApplication;

  async function createUser() {
    const body: IAuth.SignUpBodyDto = {
      username: 'username',
      password: '1234',
    };
    const res = await request(app.getHttpServer()).post('/auth/signup').send(body);
    const resBody: IAuth.SignUpResDto = res.body;
    return { user: body, accessToken: resBody.accessToken };
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    const connection = app.get(DataSource);
    await connection.synchronize(true);
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      })
    );
    await app.init();
  });

  afterEach(async () => {
    const connection = app.get(DataSource);
    await connection.synchronize(true);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('auth', () => {
    it('/auth/signup (POST)', async () => {
      const body: IAuth.SignUpBodyDto = {
        username: 'username',
        password: '1234',
      };
      const res = await request(app.getHttpServer()).post('/auth/signup').send(body).expect(201);
      const resBody: IAuth.SignUpResDto = res.body;
      expect(resBody.accessToken).toBeDefined();
    });

    it('/auth/signin (POST)', async () => {
      const { user } = await createUser();
      const res = await request(app.getHttpServer()).post('/auth/signin').send(user).expect(201);
      const resBody: IAuth.SignInResDto = res.body;
      expect(resBody.accessToken).toBeDefined();
    });
  });

  describe('boards', () => {
    let accessToken: string;

    beforeEach(async () => {
      const { accessToken: accessTokenByCreateUser } = await createUser();
      accessToken = accessTokenByCreateUser;
    });

    it('/boards (POST)', async () => {
      return request(app.getHttpServer())
        .post('/boards')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          title: 'title',
          description: 'description',
        })
        .expect(201)
        .expect({
          id: 1,
          title: 'title',
          description: 'description',
          status: 'PUBLIC',
        });
    });

    it('/boards (GET)', async () => {
      await Promise.all([
        request(app.getHttpServer()).post('/boards').set('Authorization', `Bearer ${accessToken}`).send({
          title: 'title',
          description: 'description',
        }),
        request(app.getHttpServer()).post('/boards').set('Authorization', `Bearer ${accessToken}`).send({
          title: 'title2',
          description: 'description2',
        }),
      ]);
      return request(app.getHttpServer())
        .get('/boards')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200)
        .expect([
          {
            id: 1,
            title: 'title',
            description: 'description',
            status: BoardStatus.PUBLIC,
          },
          {
            id: 2,
            title: 'title2',
            description: 'description2',
            status: BoardStatus.PUBLIC,
          },
        ]);
    });
    it('/boards/:boardId/status (PATCH)', async () => {
      await request(app.getHttpServer()).post('/boards').set('Authorization', `Bearer ${accessToken}`).send({
        title: 'title',
        description: 'description',
      });
      return request(app.getHttpServer())
        .patch('/boards/1/status')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          status: BoardStatus.PRIVATE,
        })
        .expect(200)
        .expect({
          id: 1,
          title: 'title',
          description: 'description',
          status: BoardStatus.PRIVATE,
        });
    });
    it('/boards (DELETE)', async () => {
      await request(app.getHttpServer()).post('/boards').set('Authorization', `Bearer ${accessToken}`).send({
        title: 'title',
        description: 'description',
      });
      return request(app.getHttpServer()).delete('/boards/1').set('Authorization', `Bearer ${accessToken}`).expect(200);
    });
  });
});
