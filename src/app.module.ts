import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatModule } from './modules/cats/cat.module';
import { CatController } from './modules/cats/cat.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mongos'),
    CatModule,
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
