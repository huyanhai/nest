import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date } from 'mongoose';

export type ShuiDocument = Shui & Document;

@Schema()
export class Shui extends Document {
  @Prop({ required: true })
  ip: string;

  @Prop()
  agent: string;

  @Prop()
  path: string;

  @Prop({ default: Date.UTC })
  time: string;
}

export const ShuiSchema = SchemaFactory.createForClass(Shui);
