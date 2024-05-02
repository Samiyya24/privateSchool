import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepo: Repository<Room>,
  ) {}

  create(createRoomDto: CreateRoomDto) {
    return this.roomRepo.save(createRoomDto);
  }

  findAll() {
    return this.roomRepo.find();
  }

  findOne(id: number) {
    return this.roomRepo.findOneBy({ id });
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    await this.roomRepo.update({ id }, updateRoomDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.roomRepo.delete({ id });
    return id;
  }
}
