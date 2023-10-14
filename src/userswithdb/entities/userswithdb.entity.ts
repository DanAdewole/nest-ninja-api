import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserWithDb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  // photos: Photo[];
}
