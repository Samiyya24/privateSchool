import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../../group/entities/group.entity";


@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lesson_name: string;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @OneToMany((type) => Group, (data) => data.lesson_id)
  group_id: Group[]
}
