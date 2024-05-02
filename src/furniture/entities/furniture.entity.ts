import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from '../../rooms/entities/room.entity';

@Entity()
export class Furniture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unique_number: number;
  
  @ManyToOne((type)=>Room, (data)=>data.furniture_id)
  room_id: Room;
}
