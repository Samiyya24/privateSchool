import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../../students/entities/student.entity";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_last_date: Date;

  @Column()
  payment_date: Date;

  @Column()
  price: number;

  @Column()
  is_paid: boolean;

  @ManyToOne((type) => Student, (data) => data.payment_id)
  student_id: Student;
}
