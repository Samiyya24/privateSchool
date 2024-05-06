import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { loggerFactory } from './common/logger/logger-factory';

const start = async () => {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule, {
    logger: loggerFactory('PrivateSchool'),
  });
  app.setGlobalPrefix('api');
  app.use(cookieParser());

  // ===================== SWAGGER ==========
  const config = new DocumentBuilder()
    .setTitle('Private School')
    .setDescription('The private school API description')
    .setVersion('1.0')
    .addTag('NESTJS, VALIDATION, SWAGGER, TYPEORM')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api`);
  });
};
start();
