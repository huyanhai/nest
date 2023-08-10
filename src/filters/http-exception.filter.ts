import { ArgumentsHost, ExceptionFilter, Catch } from '@nestjs/common';
import { LogType, genLog } from 'src/common/response';

@Catch()
export class HttpException implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const { method, url } = ctx.getRequest();
    const status = exception.getStatus();

    const responseData = {
      code: status,
      message: exception.message,
      data: null,
      success: false,
    };

    genLog(LogType.response, method, url, responseData);
    response.status(status).json(responseData);
  }
}
