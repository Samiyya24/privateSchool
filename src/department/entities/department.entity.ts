import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { School } from "../../school/entities/school.entity";
import { Room } from "../../rooms/entities/room.entity";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type)=>School, (data)=>data.department_id)
  school_id: School;

  @OneToMany((type)=>Room, (data)=> data.department_id)
  room_id:Room[]
}
