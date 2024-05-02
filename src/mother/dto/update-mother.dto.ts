import { PartialType } from '@nestjs/mapped-types';
import { CreateMotherDto } from './create-mother.dto';

export class UpdateMotherDto extends PartialType(CreateMotherDto) {
  first_name?: string;
  last_name?: string;
  phone_number?: number;
  profession?: string;
  pasport_copy?: string;
}
