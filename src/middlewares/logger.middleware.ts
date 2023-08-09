import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    switch (req.method) {
      case 'GET':
      case 'DELETE':
        console.log(
          `${new Date().toISOString()} [${req.method}] ${
            req.url
          } ${JSON.stringify(req.query || req.params || {})}`,
        );
        break;
      case 'POST':
      case 'PUT':
        console.log(
          `${new Date().toISOString()} [${req.method}] ${
            req.url
          } ${JSON.stringify(req.body)}`,
        );
        break;
      default:
        break;
    }
    next();
  }
}
