import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from './posts.model';
import { PostsController } from './posts.controller';

@Module({
  imports:[
      TypegooseModule.forFeature([Post])
  ],  
  controllers: [PostsController]
})
export class PostsModule {

}