import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import * as supertest from 'supertest';
import type TestAgent from 'supertest/lib/agent';
import { DataSource } from 'typeorm';

import { AppModule } from '../src/app.module';

import { BoardStatus } from '@/api-interfaces';
import type { IAuth } from '@/api-interfaces/structures/auth.structure';

// NOTE: 앱이 커지면 모듈별로 e2e를 분리하고 이 파일에는 전체 프로젝트의 흐름을 파악할 수 있는 e2e 테스트를 넣어야함
describe('AppController (e2e)', () => {
  let app: INestApplication;
  let request: TestAgent<supertest.Test>;

  async function createUser() {
    const body: IAuth.SignUpBodyDto = {
      username: 'username',
      password: '1234',
    };
    const res = await request.post('/auth/signup').send(body);
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
    request = supertest(app.getHttpServer());
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
      const res = await request.post('/auth/signup').send(body).expect(201);
      const resBody: IAuth.SignUpResDto = res.body;
      expect(resBody.accessToken).toBeDefined();
    });

    it('/auth/signin (POST)', async () => {
      const { user } = await createUser();
      const res = await request.post('/auth/signin').send(user).expect(201);
      const resBody: IAuth.SignInResDto = res.body;
      expect(resBody.accessToken).toBeDefined();
    });
  });

  describe('boards', () => {
    let accessToken: string;

    const GET = (endPoint: string) => request.get(endPoint).set('Authorization', `Bearer ${accessToken}`);
    const POST = (endPoint: string) => request.post(endPoint).set('Authorization', `Bearer ${accessToken}`);
    const PATCH = (endPoint: string) => request.patch(endPoint).set('Authorization', `Bearer ${accessToken}`);
    const DELETE = (endPoint: string) => request.delete(endPoint).set('Authorization', `Bearer ${accessToken}`);

    beforeEach(async () => {
      const { accessToken: accessTokenByCreateUser } = await createUser();
      accessToken = accessTokenByCreateUser;
    });

    it('/boards (POST)', async () => {
      return POST('/boards')
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
        POST('/boards').send({
          title: 'title',
          description: 'description',
        }),
        POST('/boards').send({
          title: 'title2',
          description: 'description2',
        }),
      ]);
      return GET('/boards')
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

    describe('/boards/:boardId/status (PATCH)', () => {
      it('success', async () => {
        await POST('/boards').send({
          title: 'title',
          description: 'description',
        });
        return PATCH('/boards/1/status')
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

      it('fail 404', async () => {
        return PATCH('/boards/1/status')
          .send({
            status: BoardStatus.PRIVATE,
          })
          .expect(404);
      });
    });

    describe('/boards (DELETE)', () => {
      it('success', async () => {
        await POST('/boards').send({
          title: 'title',
          description: 'description',
        });
        return DELETE('/boards/1').expect(200);
      });

      it('fail 404', async () => {
        return DELETE('/boards/1').expect(404);
      });
    });
  });
});
