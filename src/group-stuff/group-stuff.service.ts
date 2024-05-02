import { Injectable } from '@nestjs/common';
import { CreateGroupStuffDto } from './dto/create-group-stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupStuff } from './entities/group-stuff.entity';

@Injectable()
export class GroupStuffService {
  constructor(
    @InjectRepository(GroupStuff)
    private groupStuffRepo: Repository<GroupStuff>,
  ) {}

  create(createGroupStuffDto: CreateGroupStuffDto) {
    return this.groupStuffRepo.save(createGroupStuffDto);
  }

  findAll() {
    return this.groupStuffRepo.find();
  }

  findOne(id: number) {
    return this.groupStuffRepo.findOneBy({ id });
  }

  async update(id: number, updateGroupStuffDto: UpdateGroupStuffDto) {
    await this.groupStuffRepo.update({ id }, updateGroupStuffDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.groupStuffRepo.delete({ id });
    return id;
  }
}
