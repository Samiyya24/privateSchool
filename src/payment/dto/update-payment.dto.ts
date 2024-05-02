import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  payment_last_date?: Date;
  payment_date?: Date;
  price?: number;
  is_paid?: boolean;
}
