import { PartialType } from '@nestjs/mapped-types';
import { CreateStuffDto } from './create-stuff.dto';

export class UpdateStuffDto{
  first_name?: string;
  last_name?: string;
  gender?: string;
  age?: number;
  address?: string;
  email?: string;
  photo?: string;
}
