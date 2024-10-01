import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @Column()
  id: number;

  @Column()
  mail: string;

  @Column()
  password: string;
}
