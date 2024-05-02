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
import {
  ApiTags,
  ApiHeader,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Admin } from './entities/admin.entity';

@ApiHeader({
  name: 'Admin',
  description: 'Admin',
})
@ApiTags('Admin') // API guruhini (tag) aniqlang
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiTags('Admin') // Endpoing guruhini (tag) aniqlang
  @ApiBody({ type: CreateAdminDto }) // Foydalanuvchi kiritishni tanlash
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiTags('Admin') // Endpoing guruhini (tag) aniqlang
  @ApiResponse({ status: 200, type: [Admin] }) // Javobni tavsiflash
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiTags('Admin') // Endpoing guruhini (tag) aniqlang
  @ApiParam({ name: 'id', description: 'Admin ID' }) // Endpoing parametrlarini aniqlash
  @ApiResponse({ status: 200, type: Admin }) // Javobni tavsiflash
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiTags('Admin') // Endpoing guruhini (tag) aniqlang
  @ApiParam({ name: 'id', description: 'Admin ID' }) // Endpoing parametrlarini aniqlash
  @ApiBody({ type: UpdateAdminDto }) // Foydalanuvchi ma'lumotlarini yangilashni tanlash
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiTags('Admin') // Endpoing guruhini (tag) aniqlang
  @ApiParam({ name: 'id', description: 'Admin ID' }) // Endpoing parametrlarini aniqlash
  @ApiResponse({ status: 200, description: 'Successfully deleted' }) // Javobni tavsiflash
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
