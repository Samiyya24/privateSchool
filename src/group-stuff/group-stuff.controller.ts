import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupStuffService } from './group-stuff.service';
import { CreateGroupStuffDto } from './dto/create-group-stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group-stuff.dto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiHeader({
  name: 'Group-stuff',
  description: '',
})
@ApiTags('Group-stuff')
@Controller('group-stuff')
export class GroupStuffController {
  constructor(private readonly groupStuffService: GroupStuffService) {}

  @Post()
  create(@Body() createGroupStuffDto: CreateGroupStuffDto) {
    return this.groupStuffService.create(createGroupStuffDto);
  }

  @Get()
  findAll() {
    return this.groupStuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupStuffService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroupStuffDto: UpdateGroupStuffDto,
  ) {
    return this.groupStuffService.update(+id, updateGroupStuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupStuffService.remove(+id);
  }
}
