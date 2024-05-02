import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { Furniture } from '../../furniture/entities/furniture.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  room_number: number;

  @Column()
  floor: number;

  @Column()
  volume: number;

  @ManyToOne((type)=>Department, (data)=> data.room_id)
  department_id:Department

  @OneToMany((type)=>Furniture, (data)=>data.room_id)
  furniture_id : Furniture[]
}
