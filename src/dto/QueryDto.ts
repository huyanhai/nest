import { IsString } from 'class-validator';

export class QueryDto {
  @IsString({ message: '分页参数不能为空' })
  page: number;

  @IsString()
  pageSize: number;
}
