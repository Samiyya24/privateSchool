import { PartialType } from '@nestjs/mapped-types';
import { CreateFatherDto } from './create-father.dto';

export class UpdateFatherDto extends PartialType(CreateFatherDto) {
  first_name?: string;
  last_name?: string;
  phone_number?: number;
  profession?: string;
  pasport_copy?: string;
}
