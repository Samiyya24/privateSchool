import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepo: Repository<Role>,
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.save(createRoleDto);
  }

  findAll() {
    return this.roleRepo.find();
  }

  findOne(id: number) {
    return this.roleRepo.findOneBy({ id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRepo.update({ id }, updateRoleDto);
    return this.findOne(id);
  }

  async remove(id: number) {
      const role = await this.roleRepo.findOneBy({ id });
      if (!role) {
        throw new BadRequestException('Bunday id lik role mavjud emas');
      }
    await this.roleRepo.delete({ id });
    return id;
  }
}
