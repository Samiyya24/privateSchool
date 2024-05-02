import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StuffRole } from "../../stuff-role/entities/stuff-role.entity";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string

  @OneToMany((type)=>StuffRole, (data)=>data.role_id)
  stuffRole_id:StuffRole[]
}
