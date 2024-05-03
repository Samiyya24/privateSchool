import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MailModule } from '../../mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]),JwtModule.register({})
  ,MailModule],
  controllers: [AdminController],
  providers: [AdminService, JwtService],
})
export class AdminModule {}
