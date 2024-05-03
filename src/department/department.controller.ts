import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiHeader({
  name: 'Department',
  description: '',
})
@ApiTags('Department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @ApiOperation({ summary: 'Create department' })
  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @ApiOperation({ summary: 'Get all departments' })
  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @ApiOperation({ summary: 'Get department by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update department by id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  @ApiOperation({ summary: 'Delete department by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
}
