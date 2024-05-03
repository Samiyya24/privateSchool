import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFurnitureDto } from './dto/create-furniture.dto';
import { UpdateFurnitureDto } from './dto/update-furniture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Furniture } from './entities/furniture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FurnitureService {
  constructor(
    @InjectRepository(Furniture)
    private furnitureRepo: Repository<Furniture>,
  ) {}

  create(createFurnitureDto: CreateFurnitureDto) {
    return this.furnitureRepo.save(createFurnitureDto);
  }

  findAll() {
    return this.furnitureRepo.find();
  }

  findOne(id: number) {
    return this.furnitureRepo.findOneBy({ id });
  }

  async update(id: number, updateFurnitureDto: UpdateFurnitureDto) {
    await this.furnitureRepo.update({ id }, updateFurnitureDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const furniture = await this.furnitureRepo.findOneBy({ id });
    if (!furniture) {
      throw new BadRequestException('Bunday id lik furniture mavjud emas');
    }
    await this.furnitureRepo.delete({ id });
    return id;
  }
}
