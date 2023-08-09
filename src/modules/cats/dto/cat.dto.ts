import { IsString, IsInt } from 'class-validator';
export class CatDto {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
}
