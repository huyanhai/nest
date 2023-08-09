import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  //   @Prop({ required: true, unique: true, auto: true, default: 0 })
  //   id: number;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
