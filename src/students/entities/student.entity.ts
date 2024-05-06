import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentGroup } from '../../student_group/entities/student_group.entity';
import { Parent } from '../../parent/entities/parent.entity';
import { Payment } from '../../payment/entities/payment.entity';
import { Stuff } from '../../stuff/entities/stuff.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  date_of_birth: string;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  date_of_admission: string;

  @Column()
  photo: string;

  @OneToMany((type) => StudentGroup, (data) => data.student_id)
  studentGroup_id: StudentGroup;

  @ManyToOne((type) => Parent, (data) => data.student_id)
  parent_id: Parent;

  @ManyToOne((type) => Stuff, (data) => data.student_id)
  class_representative: Stuff;

  @ManyToOne((type) => Payment, (data) => data.student_id)
  payment_id: Payment;
}
