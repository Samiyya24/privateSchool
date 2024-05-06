import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentRepo.save(createStudentDto);
  }

  findAll() {
    return this.studentRepo.find({ relations: { payment_id: true, parent_id:true } });
  }

  findOne(id: number) {
    return this.studentRepo.findOneBy({ id });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.studentRepo.update({ id }, updateStudentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const student = await this.studentRepo.findOneBy({ id });
    if (!student) {
      throw new BadRequestException('Bunday id lik student mavjud emas');
    }
    await this.studentRepo.delete({ id });
    return id;
  }
}
