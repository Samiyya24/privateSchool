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
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiHeader({
  name: 'Father',
  description: '',
})
@ApiTags('Father')
@Controller('father')
export class FatherController {
  constructor(private readonly fatherService: FatherService) {}

  @ApiOperation({ summary: 'Create father' })
  @Post()
  create(@Body() createFatherDto: CreateFatherDto) {
    return this.fatherService.create(createFatherDto);
  }

  @ApiOperation({ summary: 'Get all father' })
  @Get()
  findAll() {
    return this.fatherService.findAll();
  }

  @ApiOperation({ summary: 'Get father by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fatherService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update father by id' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFatherDto: UpdateFatherDto) {
    return this.fatherService.update(+id, updateFatherDto);
  }

  @ApiOperation({ summary: 'Delete father by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fatherService.remove(+id);
  }
}
