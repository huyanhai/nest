import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatController } from './modules/cats/cat.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';

import { dbAddress } from './config/db';
import { ShuiModule } from './modules/shui/shui.module';

@Module({
  imports: [
    MongooseModule.forRoot(dbAddress),
    // CatModule,
    ShuiModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude().forRoutes(CatController);
  }
}
