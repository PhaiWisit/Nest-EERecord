import { Visitor } from 'src/visitors/entities/visitor.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Visitor, (visitor) => visitor.user, { eager: true })
  tasks: Visitor[];
}
