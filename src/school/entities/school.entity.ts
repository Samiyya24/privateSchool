import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "../../department/entities/department.entity";
import { Stuff } from "../../stuff/entities/stuff.entity";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  school_name: string;

  @Column()
  since: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  school_area: number;

  @Column()
  location: string;

  @Column()
  students_id: number;

  @Column()
  photo: string;

  @Column()
  school_uniform_photo: string;

  @Column()
  payment_id: number;

  @ManyToOne((type) => Department, (data) => data.school_id)
  department_id: Department;

  @ManyToOne((type) => Stuff, (data) => data.school_id)
  stuff_id: Stuff
}
