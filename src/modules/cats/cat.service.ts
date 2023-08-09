import { Injectable } from '@nestjs/common';
import { Cat, CatDocument } from './cat.entity';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { CatDto } from './dto/cat.dto';

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
      return '成功';
    }
    return '失败';
  }

  findAll(): Promise<Cat[]> {
    return this.cats.find().exec();
  }

  async findOne(id: string) {
    const cat = await this.cats.findById(id);
    if (cat) {
      return {
        name: cat.name,
        age: cat.age,
      };
    }
    return [];
  }

  async remove(id: string) {
    const result = await this.cats.findByIdAndRemove(id);
    if (result) {
      return null;
    }
    return {
      data: null,
      message: '删除失败',
    };
  }
}
