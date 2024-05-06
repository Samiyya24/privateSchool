import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { School } from '../../school/entities/school.entity';
import { StuffRole } from '../../stuff-role/entities/stuff-role.entity';
import { GroupStuff } from '../../group-stuff/entities/group-stuff.entity';
import { Student } from '../../students/entities/student.entity';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  photo: string;

  @OneToMany((type) => School, (data) => data.stuff_id)
  school_id: School[];

  @OneToMany((type) => Student, (data) => data.class_representative)
  student_id: Student[];

  @ManyToOne((type) => StuffRole, (data) => data.stuff_id)
  stuffRole_id: StuffRole;

  @ManyToOne((type) => GroupStuff, (data) => data.stuff_id)
  groupStuff_id: GroupStuff;
}
