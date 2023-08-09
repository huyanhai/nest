import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { Cat } from './cat.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGrard } from 'src/guards/roles.guard';

import { Roles } from 'src/decorators/roles.decorator';

@Controller('/cat')
@UseGuards(AuthGuard, RolesGrard)
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post('/create')
  create(@Body() body: CatDto): Promise<{ [key: string]: any }> {
    return this.catService.create(body);
  }

  @Get('/findAll')
  @Roles('admin')
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get('/find/:id')
  findOne(
    @Param('id')
    id: string,
  ) {
    return this.catService.findOne(id);
  }

  @Get('/remove/:id')
  @Roles('admin')
  removeOne(
    @Param('id')
    id: string,
  ) {
    return this.catService.remove(id);
  }
}
