/*
 * @Description: 
 * @Author: Chuang Li
 * @Date: 2021-09-23 07:42:46
 * @LastEditTime: 2021-09-23 14:32:40
 * @LastEditors: Chuang Li
 */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

// 访问：http://127.0.0.1:3000/api-docs/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const pageConfig = new DocumentBuilder().setTitle("音乐台API文档").setVersion("0.1").build();
  const document = SwaggerModule.createDocument(app,pageConfig);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
