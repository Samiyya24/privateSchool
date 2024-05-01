import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  addres: string;

  @Column()
  gender: string;

  @Column()
  is_active: boolean;
}
