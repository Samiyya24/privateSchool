import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Stuff } from '../../stuff/entities/stuff.entity';
import { Group } from '../../group/entities/group.entity';

@Entity()
export class GroupStuff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Stuff, (data) => data.groupStuff_id)
  stuff_id: Stuff

  @OneToMany((type) => Group, (data) => data.groupStuff_id)
  group_id: Group[]
}
