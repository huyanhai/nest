import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LogType, genLog } from 'src/common/response';
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, url, query, params, body } = req;
    switch (req.method) {
      case 'GET':
      case 'DELETE':
        genLog(LogType.request, method, url, query || params || {});
        break;
      case 'POST':
      case 'PUT':
        genLog(LogType.request, method, url, body);
        break;
      default:
        break;
    }
    next();
  }
}
