import { Visitor } from 'src/visitors/entities/visitor.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  villageName: string;

  @Column({ nullable: false })
  email: string;

  @OneToMany(() => Visitor, (visitor) => visitor.user, { eager: true })
  visitors: Visitor[];
}
