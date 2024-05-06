import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStuffRoleDto } from './dto/create-stuff-role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StuffRole } from './entities/stuff-role.entity';

@Injectable()
export class StuffRoleService {
  constructor(
    @InjectRepository(StuffRole)
    private stuffRoleRepo: Repository<StuffRole>,
  ) {}
 
  create(createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleRepo.save(createStuffRoleDto);
  }

  findAll() {
    return this.stuffRoleRepo.find();
  }
 
  findOne(id: number) {
    return this.stuffRoleRepo.findOneBy({ id });
  }

  async update(id: number, updateStuffRoleDto: UpdateStuffRoleDto) {
    await this.stuffRoleRepo.update({ id }, updateStuffRoleDto);
    return this.findOne(id);
  }

  async remove(id: number) {
      const stuffRole = await this.stuffRoleRepo.findOneBy({ id });
      if (!stuffRole) {
        throw new BadRequestException('Bunday id lik stuffRole mavjud emas');
      }
    await this.stuffRoleRepo.delete({ id });
    return id;
  }
}
