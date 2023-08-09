import { HttpStatus } from '@nestjs/common';

export interface Response {
  data: unknown;
  message: string;
  code: HttpStatus;
}

export const genResponse = (
  data: unknown,
  message: string = '成功',
  code?: HttpStatus,
): Response => {
  return {
    data,
    message,
    code,
  };
};
