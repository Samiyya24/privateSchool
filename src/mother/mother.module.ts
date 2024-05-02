import { Module } from '@nestjs/common';
import { MotherService } from './mother.service';
import { MotherController } from './mother.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mother } from './entities/mother.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mother])],
  controllers: [MotherController],
  providers: [MotherService],
})
export class MotherModule {}
