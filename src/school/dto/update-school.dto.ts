import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolDto } from './create-school.dto';

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {
  school_name?: string;
  since?: Date;
  address?: string;
  description?: string;
  school_area?: number;
  location?: string;
  students_id?: number;
  photo?: string;
  school_uniform_photo?: string;
  payment_id?: number;
}
