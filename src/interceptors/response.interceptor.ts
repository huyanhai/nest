import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((nextData) => {
        const { data, message } = nextData;
        return {
          data,
          success: true,
          code: 0,
          message,
        };
      }),
      // catchError((err) => {
      //   console.log('err', err);

      //   return of('I', 'II', 'III', 'IV', 'V', err);
      // }),
    );
  }
}
