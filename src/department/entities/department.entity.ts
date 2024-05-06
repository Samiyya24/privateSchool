import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { School } from "../../school/entities/school.entity";
import { Room } from "../../rooms/entities/room.entity";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type)=>School, (data)=>data.department_id)
  school_id: School[]

  @ManyToOne((type)=>Room, (data)=> data.department_id)
  room_id:Room
}
