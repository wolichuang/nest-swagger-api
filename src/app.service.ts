/*
 * @Description: 
 * @Author: Chuang Li
 * @Date: 2021-09-23 07:42:46
 * @LastEditTime: 2021-09-23 14:01:27
 * @LastEditors: Chuang Li
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World123!';
  }
}
