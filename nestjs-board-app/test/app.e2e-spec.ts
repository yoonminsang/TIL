import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { DataSource } from 'typeorm';

import { AppModule } from '../src/app.module';

import { BoardStatus } from '@/api-interfaces';

describe('AppController (e2e)', () => {
  let app: INestApplication;

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

  it('/boards (POST)', () => {
    return request(app.getHttpServer())
      .post('/boards')
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
      request(app.getHttpServer()).post('/boards').send({
        title: 'title',
        description: 'description',
      }),
      request(app.getHttpServer()).post('/boards').send({
        title: 'title2',
        description: 'description2',
      }),
    ]);

    return request(app.getHttpServer())
      .get('/boards')
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

  it('/boards (PATCH)', async () => {
    await request(app.getHttpServer()).post('/boards').send({
      title: 'title',
      description: 'description',
    });

    return request(app.getHttpServer())
      .patch('/boards/1/status')
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
    await request(app.getHttpServer()).post('/boards').send({
      title: 'title',
      description: 'description',
    });

    return request(app.getHttpServer()).delete('/boards/1').expect(200);
  });
});
