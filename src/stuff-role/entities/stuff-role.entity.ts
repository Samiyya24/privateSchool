import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Stuff } from '../../stuff/entities/stuff.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class StuffRole {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Stuff, (data) => data.stuffRole_id)
  stuff_id: Stuff[]

  @ManyToOne((type) => Role, (data) => data.stuffRole_id)
  role_id: Role;
}
