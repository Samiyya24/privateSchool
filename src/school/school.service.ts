import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolService {
  constructor(@InjectRepository(School) private schoolRepo: Repository<School>) {}
 
  create(createSchoolDto: CreateSchoolDto) {
    return this.schoolRepo.save(createSchoolDto);
  }

  findAll() {
    return this.schoolRepo.find();
  }

  findOne(id: number) {
    return this.schoolRepo.findOneBy({ id });
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    await this.schoolRepo.update({ id }, updateSchoolDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.schoolRepo.delete({ id });
    return id;
  }
}
