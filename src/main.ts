import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidatorPipe } from './pipes/validate.pipe';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { HttpException } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpException());
  app.useGlobalPipes(new ValidatorPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
