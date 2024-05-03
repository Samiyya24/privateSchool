import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,
  ) {}

  create(createLessonDto: CreateLessonDto) {
    return this.lessonRepo.save(createLessonDto);
  }

  findAll() {
    return this.lessonRepo.find();
  }

  findOne(id: number) {
    return this.lessonRepo.findOneBy({ id });
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    await this.lessonRepo.update({ id }, updateLessonDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const lesson = await this.lessonRepo.findOneBy({ id });
    if (!lesson) {
      throw new BadRequestException('Bunday id lik lesson mavjud emas');
    }
    await this.lessonRepo.delete({ id });
    return id;
  }
}
