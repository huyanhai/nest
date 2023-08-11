import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { Shui, ShuiDocument } from './schemeas/shui.schema';

@Injectable()
export class ShuiService {
  constructor(
    @InjectModel(Shui.name)
    private shui: Model<ShuiDocument>,
  ) {}

  async insertInfo(agent: string, path: string, ip?: string): Promise<boolean> {
    if (ip) {
      const ipResult = this.shui.where({ ip });
      const isSave = await ipResult.findOne();
      if (!isSave) {
        await this.shui.create({
          ip,
          agent,
          path,
          time: new Date().toISOString(),
        });
      } else {
        await this.shui.findOneAndUpdate(
          { ip },
          {
            ip,
            agent,
            path,
            time: new Date().toISOString(),
          },
        );
      }
    }
    return Promise.resolve(true);
  }

  async findAll(): Promise<Shui[]> {
    return this.shui.find().exec();
  }
}
