import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn()
  created?: Date;

  @UpdateDateColumn()
  updated?: Date;

  @Column({ unique: true })
  name!: string;

  @Column()
  type!: string;

  @Column('numeric', { precision: 5, scale: 2 })
  price!: number;

  @Column()
  description!: string;

  @Column()
  imageUrl!: string;
}
