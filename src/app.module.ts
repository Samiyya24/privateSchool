import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { SchoolModule } from './school/school.module';
import { School } from './school/entities/school.entity';
import { DepartmentModule } from './department/department.module';
import { Department } from './department/entities/department.entity';
import { RoomsModule } from './rooms/rooms.module';
import { FurnitureModule } from './furniture/furniture.module';
import { StuffModule } from './stuff/stuff.module';
import { StuffRoleModule } from './stuff-role/stuff-role.module';
import { RoleModule } from './role/role.module';
import { Room } from './rooms/entities/room.entity';
import { Furniture } from './furniture/entities/furniture.entity';
import { Stuff } from './stuff/entities/stuff.entity';
import { StuffRole } from './stuff-role/entities/stuff-role.entity';
import { Role } from './role/entities/role.entity';
import { GroupModule } from './group/group.module';
import { GroupStuffModule } from './group-stuff/group-stuff.module';
import { LessonsModule } from './lessons/lessons.module';
import { StudentsModule } from './students/students.module';
import { PaymentModule } from './payment/payment.module';
import { MotherModule } from './mother/mother.module';
import { Group } from './group/entities/group.entity';
import { GroupStuff } from './group-stuff/entities/group-stuff.entity';
import { Lesson } from './lessons/entities/lesson.entity';
import { Student } from './students/entities/student.entity';
import { Payment } from './payment/entities/payment.entity';
import { Mother } from './mother/entities/mother.entity';
import { FatherModule } from './father/father.module';
import { Father } from './father/entities/father.entity';
import { StudentGroupModule } from './student_group/student_group.module';
import { StudentGroup } from './student_group/entities/student_group.entity';
import { MailModule } from './mail/mail.module';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      synchronize: true,
      entities: [
        Admin,
        School,
        Department,
        Room,
        Furniture,
        Stuff,
        StuffRole,
        Role,
        Group,
        GroupStuff,
        Lesson,
        Student,
        Payment,
        Mother,
        Father,
        StudentGroup,
        
      ],
    }),
    AdminModule,
    SchoolModule,
    DepartmentModule,
    RoomsModule,
    FurnitureModule,
    StuffModule,
    StuffRoleModule,
    RoleModule,
    GroupModule,
    GroupStuffModule,
    LessonsModule,
    StudentsModule,
    PaymentModule,
    MotherModule,
    FatherModule,
    StudentGroupModule,
    MailModule,
    SmsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
