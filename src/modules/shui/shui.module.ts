import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ShuiController } from './shui.controller';
import { ShuiService } from './shui.service';
import { Shui, ShuiSchema } from './schemeas/shui.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shui.name, schema: ShuiSchema }]),
  ],
  controllers: [ShuiController],
  providers: [ShuiService],
  exports: [ShuiService],
})
export class ShuiModule {}
