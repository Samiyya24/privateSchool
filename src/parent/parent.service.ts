import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { Parent } from './entities/parent.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private motherRepo: Repository<Parent>,
  ) {}

  create(createParentDto: CreateParentDto) {
    return this.motherRepo.save(createParentDto);
  }

  findAll() {
    return this.motherRepo.find({relations:{student_id:true}});
  }

  findOne(id: number) {
    return this.motherRepo.findOneBy({ id });
  }

  async update(id: number, updateParentDto: UpdateParentDto) {
    await this.motherRepo.update({ id }, updateParentDto);
    return this.findOne(id);
  }

  async remove(id: number) { 
    const mother = await this.motherRepo.findOneBy({ id });
    if (!mother) {
      throw new BadRequestException('Bunday id lik parent mavjud emas');
    }
    await this.motherRepo.delete({ id });
    return id;
  }
}
