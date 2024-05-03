import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FatherService } from './father.service';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';


@ApiHeader({
  name: 'Father',
  description: '',
})
@ApiTags('Father')
@Controller('father')
export class FatherController {
  constructor(private readonly fatherService: FatherService) {}

  @Post()
  create(@Body() createFatherDto: CreateFatherDto) {
    return this.fatherService.create(createFatherDto);
  }

  @Get()
  findAll() {
    return this.fatherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fatherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFatherDto: UpdateFatherDto) {
    return this.fatherService.update(+id, updateFatherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fatherService.remove(+id);
  }
}
