import { Injectable } from '@nestjs/common';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { Father } from './entities/father.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FatherService {
  constructor(
    @InjectRepository(Father)
    private fatherRepo: Repository<Father>,
  ) {}

  create(createFatherDto: CreateFatherDto) {
    return this.fatherRepo.save(createFatherDto);
  }

  findAll() {
    return this.fatherRepo.find();
  }

  findOne(id: number) {
    return this.fatherRepo.findOneBy({ id });
  }

  async update(id: number, updateFatherDto: UpdateFatherDto) {
    await this.fatherRepo.update({ id }, updateFatherDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.fatherRepo.delete({ id });
    return id;
  }
}
