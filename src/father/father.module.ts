import { Module } from '@nestjs/common';
import { FatherService } from './father.service';
import { FatherController } from './father.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Father } from './entities/father.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Father])],
  controllers: [FatherController],
  providers: [FatherService],
})
export class FatherModule {}
