<!--
 * @Description: 
 * @Author: Chuang Li
 * @Date: 2021-09-23 14:01:56
 * @LastEditTime: 2021-09-23 14:17:40
 * @LastEditors: Chuang Li
-->
# Nodejs + Nestjs 极速开发后端 API

## Nestjs

Nest（NestJS）是用于构建高效，可扩展的 Node.js 服务器端应用程序的框架。内置并完全支持 TypeScript（但仍使开发人员能够使用纯 JavaScript 进行编码)


## 快速开始

```js
npm i -g @nestjs/cli
nest new nest-swagger-api
npm run start:dev
```

## 项目结构

1. main.ts 可以看出是启动的入口，监听了 3000 端口
2. app.controller.ts,app.module.ts,app.service.ts java 程序员的 mvc 结构
3. app.service.ts 写了一个类 AppService，里面有个 getHello 的方法，并且使用 @Injectable() 表示这个类是可以被注入的
4. app.controller.ts 中注入了 AppService 并且定义了一个 get 请求接口，返回 hellworld,看到了熟悉的注解
5. app.module.ts 定义了一个模块，模块是 nestjs 里面非常重要的一个概念，将不同业务分成不同模块，可以清楚的将代码分类，提高可读性，也便于管理

## 集成 swagger

```js
yarn add  @nestjs/swagger swagger-ui-express
```

```js
// main.ts
import { NestFactory } from '@nestjs/core';
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
```

## 集成 mongodb

```js
yarn add mongoose nestjs-typegoose @typegoose/typegoose

nest g mo posts //新建posts模块
nest g co posts //新建controller
```


