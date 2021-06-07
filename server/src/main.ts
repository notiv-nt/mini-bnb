import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import session from './misc/session';
import passport from 'passport';
// import express from 'express';
// import path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(express.static(path.resolve(__dirname, '../../static')));

  app.use(helmet());
  // app.enableCors({
  //   origin: process.env.CORS_ORIGINS?.split(/\,\s*/),
  //   credentials: true,
  // });
  app.use(cookieParser());

  app.use(session());

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.SERVER_PORT as string);

  console.log(`Application is running on: ${process.env.SERVER_PORT}`);
}
bootstrap();
