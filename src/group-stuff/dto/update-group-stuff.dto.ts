import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupStuffDto } from './create-group-stuff.dto';

export class UpdateGroupStuffDto extends PartialType(CreateGroupStuffDto) {
  
}
