import { Module } from '@nestjs/common';
import { GroupStuffService } from './group-stuff.service';
import { GroupStuffController } from './group-stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupStuff } from './entities/group-stuff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupStuff])],
  controllers: [GroupStuffController],
  providers: [GroupStuffService],
})
export class GroupStuffModule {}
