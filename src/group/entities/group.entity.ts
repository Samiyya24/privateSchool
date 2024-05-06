import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GroupStuff } from '../../group-stuff/entities/group-stuff.entity';
import { Lesson } from '../../lessons/entities/lesson.entity';
import { StudentGroup } from '../../student_group/entities/student_group.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  students_count: number;

  @ManyToOne((type) => GroupStuff, (data) => data.group_id)
  groupStuff_id: GroupStuff;

  @ManyToOne((type) => Lesson, (data) => data.group_id)
  lesson_id: Lesson;

  @OneToMany((type) => StudentGroup, (data) => data.group_id)
  studentGroup_id: StudentGroup[]
}
