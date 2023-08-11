import { IsString } from 'class-validator';
export class ShuiDto {
  @IsString()
  readonly ip: string;
  @IsString()
  readonly agent: string;
  @IsString()
  readonly path: string;
  @IsString()
  readonly time: string;
}
