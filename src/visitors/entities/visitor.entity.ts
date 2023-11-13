import { User } from 'src/users/entities/user.entity';
import { Exclude } from '@nestjs/class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Visitor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    visitorStatus: boolean;

    @Column()
    visitorHouseNumber: string;

    @Column()
    visitorContactMatter: string;

    @Column()
    visitorVehicleType: string;

    @CreateDateColumn({ name: 'visitor_enter' })
    visitorEnter: Date;

    @CreateDateColumn({ name: 'visitor_exit' })
    visitorExit: Date;

    @Column()
    visitorImagePathIdCard: string;

    @Column()
    visitorImagePathPalte: string;

    @CreateDateColumn({ name: 'visitor_update', default: () => 'NOW()', nullable: true })
    visitorUpdateTime: Date;

    // @ManyToOne(() => User, (user) => user.visitors, { eager: false })
    // @Exclude({ toPlainOnly: true })
    // user: User;
}
