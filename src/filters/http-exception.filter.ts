import { ArgumentsHost, ExceptionFilter, Catch } from '@nestjs/common';

@Catch()
export class HttpException implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response.status(status).json({
      code: status,
      message: exception.message,
      data: null,
    });
  }
}
