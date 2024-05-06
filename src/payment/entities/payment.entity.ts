import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../../students/entities/student.entity";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_last_date: string;

  @Column()
  payment_date: string;

  @Column()
  price: number;

  @Column()
  is_paid: boolean;

  @OneToMany((type) => Student, (data) => data.payment_id)
  student_id: Student[];
}
