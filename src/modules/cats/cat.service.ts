import { Injectable } from '@nestjs/common';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { CatDto } from './dto/cat.dto';

import { genResponse } from '../../common/response';

@Injectable()
export class CatService {
  // private readonly cats: Cat[] = [];

  constructor(
    @InjectModel(Cat.name)
    private cats: Model<CatDocument>,
  ) {}

  async create(cat: CatDto) {
    const createdCat = new this.cats(cat);
    const result = await createdCat.save();
    if (result) {
      return genResponse(null, '创建成功');
    }
    return genResponse(null, '创建失败');
  }

  findAll(): Promise<Cat[]> {
    return this.cats.find().exec();
  }

  async findOne(id: string) {
    const cat = await this.cats.findById(id);
    if (cat) {
      return genResponse({
        name: cat.name,
        age: cat.age,
      });
    }
    return genResponse(null);
  }

  async remove(id: string) {
    const result = await this.cats.findByIdAndRemove(id);
    if (result) {
      return genResponse(null, '删除成功');
    }
    return genResponse(null, '删除失败');
  }
}
