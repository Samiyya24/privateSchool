import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  group_name?: string;
  students_count?: number;
  stuff_id?: number;
}
