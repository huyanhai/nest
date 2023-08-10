import { HttpStatus } from '@nestjs/common';
import { Request } from 'express';

export interface Response {
  data: unknown;
  message: string;
  code: HttpStatus;
}

export enum LogType {
  request,
  response,
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

export const genLog = (
  type: LogType,
  method: string,
  url: string,
  data: { [key: string]: unknown },
) => {
  console.log(
    `${
      type === LogType.request ? '请求' : '响应'
    } ${new Date().toISOString()} [${method}] ${url} ${JSON.stringify(
      data || {},
    )}}`,
  );
};
