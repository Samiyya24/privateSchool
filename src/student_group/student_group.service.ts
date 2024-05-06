import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentGroupDto } from './dto/create-student_group.dto';
import { UpdateStudentGroupDto } from './dto/update-student_group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentGroup } from './entities/student_group.entity';

@Injectable()
export class StudentGroupService {
  constructor(
    @InjectRepository(StudentGroup)
    private studentGroupRepo: Repository<StudentGroup>,
  ) {}

  create(createStudentGroupDto: CreateStudentGroupDto) {
    return this.studentGroupRepo.save(createStudentGroupDto);
  }

  findAll() {
    return this.studentGroupRepo.find({
      relations: {
        group_id: { lesson_id: true },
        // student_id: { payment_id: true },
      },
    });
  }

  findOne(id: number) {
    return this.studentGroupRepo.findOneBy({ id });
  }

  async update(id: number, updateStudentGroupDto: UpdateStudentGroupDto) {
    await this.studentGroupRepo.update({ id }, updateStudentGroupDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const studentGroup = await this.studentGroupRepo.findOneBy({ id });
    if (!studentGroup) {
      throw new BadRequestException('Bunday id lik studentGroup mavjud emas');
    }
    await this.studentGroupRepo.delete({ id });
    return id;
  }
}
