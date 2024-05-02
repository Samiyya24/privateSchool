import { Module } from '@nestjs/common';
import { StuffRoleService } from './stuff-role.service';
import { StuffRoleController } from './stuff-role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StuffRole])],
  controllers: [StuffRoleController],
  providers: [StuffRoleService],
})
export class StuffRoleModule {}
