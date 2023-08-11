import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidatorPipe } from './pipes/validate.pipe';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { HttpException } from './filters/http-exception.filter';
import { IS_PROD } from './constants/paths';
import { genSslOptions } from './utils/ssl';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: IS_PROD && genSslOptions(),
  });
  app.enableCors();
  app.useGlobalFilters(new HttpException());
  app.useGlobalPipes(new ValidatorPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
