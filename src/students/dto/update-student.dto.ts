import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  first_name?: string;
  last_name?: string;
  date_of_birth?: Date;
  gender?: string;
  address?: string;
  date_of_admission?: Date;
  photo?: string;
  class_representative?: string;
}
