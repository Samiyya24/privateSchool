import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../../students/entities/student.entity";

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  profession: string;

  @Column()
  pasport_copy: string;

  @Column()
  gender: string;

  @OneToMany((type) => Student, (data) => data.parent_id)
  student_id: Student;
}
