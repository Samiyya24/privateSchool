import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMotherDto } from './dto/create-mother.dto';
import { UpdateMotherDto } from './dto/update-mother.dto';
import { Mother } from './entities/mother.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MotherService {
  constructor(
    @InjectRepository(Mother)
    private motherRepo: Repository<Mother>,
  ) {}

  create(createMotherDto: CreateMotherDto) {
    return this.motherRepo.save(createMotherDto);
  }

  findAll() {
    return this.motherRepo.find();
  }

  findOne(id: number) {
    return this.motherRepo.findOneBy({ id });
  }

  async update(id: number, updateMotherDto: UpdateMotherDto) {
    await this.motherRepo.update({ id }, updateMotherDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const mother = await this.motherRepo.findOneBy({ id });
    if (!mother) {
      throw new BadRequestException('Bunday id lik mother mavjud emas');
    }
    await this.motherRepo.delete({ id });
    return id;
  }
}
