import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stuff } from './entities/stuff.entity';

@Injectable()
export class StuffService {
  constructor(
    @InjectRepository(Stuff)
    private stuffRepo: Repository<Stuff>,
  ) {}

  create(createStuffDto: CreateStuffDto) {
    return this.stuffRepo.save(createStuffDto);
  }

  findAll() {
    return this.stuffRepo.find({
      relations: {
        stuffRole_id: { role_id: true },
        groupStuff_id: { group_id: true },
      },
    });
  }

  findOne(id: number) {
    return this.stuffRepo.findOneBy({ id });
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
    await this.stuffRepo.update({ id }, updateStuffDto);
    return this.findOne(id);
  }

  async remove(id: number) {
      const stuff = await this.stuffRepo.findOneBy({ id });
      if (!stuff) {
        throw new BadRequestException('Bunday id lik stuff mavjud emas');
      }
    await this.stuffRepo.delete({ id });
    return id;
  }
}
