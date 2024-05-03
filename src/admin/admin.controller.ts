import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiHeader({
  name: 'Admin',
  description: '',
})
@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  // @ApiResponse({
  //   status: 201,
  //   description: 'The record has been successfully created.',
  // })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  // @ApiTags('FIND ONE')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  // @ApiTags('UPDATE')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  // @ApiTags('DELETE')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
