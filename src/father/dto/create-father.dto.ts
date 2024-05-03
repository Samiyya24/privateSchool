

import { IsNumber, IsString } from "class-validator";

export class CreateFatherDto {
  @IsString()
  first_name: string;
  @IsNumber()
  last_name: string;
  @IsString()
  phone_number: number;
  @IsString()
  profession: string;
  @IsString()
  pasport_copy: string;
}
