import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../../group/entities/group.entity';
import { Student } from '../../students/entities/student.entity';

@Entity()
export class StudentGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Group, (data) => data.studentGroup_id)
  group_id: Group;

  @OneToMany((type) => Student, (data) => data.studentGroup_id)
  student_id: Student;
}
