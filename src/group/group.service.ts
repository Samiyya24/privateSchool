import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepo: Repository<Group>,
  ) {}

  create(createGroupDto: CreateGroupDto) {
    return this.groupRepo.save(createGroupDto);
  }

  findAll() {
    return this.groupRepo.find();
  }

  findOne(id: number) {
    return this.groupRepo.findOneBy({ id });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    await this.groupRepo.update({ id }, updateGroupDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const group = await this.groupRepo.findOneBy({ id });
    if (!group) {
      throw new BadRequestException('Bunday id lik group mavjud emas');
    }
    await this.groupRepo.delete({ id });
    return id;
  }
}
