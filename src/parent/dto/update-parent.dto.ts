import { PartialType } from '@nestjs/mapped-types';

export class UpdateParentDto {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  profession?: string;
  pasport_copy?: string;
  adrress?: string;
  gender?: string;
}
