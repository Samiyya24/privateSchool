import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../../students/entities/student.entity";

@Entity()
export class Father {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: number;

  @Column()
  profession: string;

  @Column()
  pasport_copy: string;

  @OneToMany((type) => Student, (data) => data.father_id)
  student_id: Student;
}
