import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentGroup } from '../../student_group/entities/student_group.entity';
import { Father } from '../../father/entities/father.entity';
import { Mother } from '../../mother/entities/mother.entity';
import { Payment } from '../../payment/entities/payment.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  date_of_birth: Date;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  date_of_admission: Date;

  @Column()
  photo: string;

  @Column()
  class_representative: string;

  @OneToMany((type) => StudentGroup, (data) => data.student_id)
  studentGroup_id: StudentGroup;

  @ManyToOne((type) => Father, (data) => data.student_id)
  father_id: Father;

  @ManyToOne((type) => Mother, (data) => data.student_id)
  mother_id: Mother;

  @OneToMany((type) => Payment, (data) => data.student_id)
  payment_id: Payment;
}
