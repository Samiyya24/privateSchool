import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotherService } from './mother.service';
import { CreateMotherDto } from './dto/create-mother.dto';
import { UpdateMotherDto } from './dto/update-mother.dto';

@Controller('mother')
export class MotherController {
  constructor(private readonly motherService: MotherService) {}

  @Post()
  create(@Body() createMotherDto: CreateMotherDto) {
    return this.motherService.create(createMotherDto);
  }

  @Get()
  findAll() {
    return this.motherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotherDto: UpdateMotherDto) {
    return this.motherService.update(+id, updateMotherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motherService.remove(+id);
  }
}
