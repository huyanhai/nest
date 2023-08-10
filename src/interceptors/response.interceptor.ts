import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { LogType, genLog } from 'src/common/response';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((nextData) => {
        const { method, url } = context.switchToHttp().getRequest();
        const { data = null, code, message } = nextData;
        const responseData = {
          data,
          success: true,
          code: code || HttpStatus.OK,
          message,
        };
        genLog(LogType.response, method, url, responseData);
        return responseData;
      }),
    );
  }
}
