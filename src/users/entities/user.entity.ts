import { Visitor } from 'src/visitors/entities/visitor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    userName: string;

    @Column()
    villageName: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @CreateDateColumn({ name: 'user_update', default: () => 'NOW()', nullable: true })
    userUpdateTime: Date;

    // @OneToMany(() => Visitor, (visitors) => visitors.user)
    // visitors: Visitor[];
}