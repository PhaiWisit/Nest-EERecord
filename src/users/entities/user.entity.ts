import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    userName: string;

    @Column()
    villageName: string;

    @Column()
    password: string;

    @Column()
    email: string;
}