import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepo.save(createDepartmentDto);
  }

  findAll() {
    return this.departmentRepo.find();
  }

  findOne(id: number) {
    return this.departmentRepo.findOneBy({ id });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    await this.departmentRepo.update({ id }, updateDepartmentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const department = await this.departmentRepo.findOneBy({ id });
    if (!department) {
      throw new BadRequestException('Bunday id lik department mavjud emas');
    }
    await this.departmentRepo.delete({ id });
    return id;
  }
}
