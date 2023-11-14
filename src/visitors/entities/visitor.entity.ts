import { User } from 'src/auth/user.entity';
import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { IsTimeZone } from 'class-validator';

@Entity()
export class Visitor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: 'ACTIVE' })
    visitorStatus: string;

    @Column()
    visitorHouseNumber: string;

    @Column()
    visitorContactMatter: string;

    @Column()
    visitorVehicleType: string;

    @CreateDateColumn({ name: 'visitorEnter', default: () => 'NOW()' })
    visitorEnter: Date;

    @CreateDateColumn({ name: 'visitorExit' })
    visitorExit: Date;

    @Column()
    visitorImagePathIdCard: string;

    @Column()
    visitorImagePathPalte: string;

    @UpdateDateColumn({ name: 'visitorUpdate', default: () => 'NOW()', nullable: false, })
    visitorUpdate: Date;

    @ManyToOne(() => User, (user) => user.visitors, { eager: false, })
    @Exclude({ toPlainOnly: true })
    user: User;
}

