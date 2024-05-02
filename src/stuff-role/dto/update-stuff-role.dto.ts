import { PartialType } from '@nestjs/mapped-types';
import { CreateStuffRoleDto } from './create-stuff-role.dto';

export class UpdateStuffRoleDto extends PartialType(CreateStuffRoleDto) {
}
