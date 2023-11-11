import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from 'typeorm';

@Entity()
export class Visitor {
    @PrimaryGeneratedColumn()
    visitorId: number;

    @Column()
    userId: string;

    @Column()
    visitorStatus: boolean;

    @Column()
    visitorHouseNumber: string;

    @Column()
    visitorContactMatter: string;

    @Column()
    visitorVehecleType: string;

    @CreateDateColumn({ name: 'visitor_enter' })
    visitorEnter: Date;

    @CreateDateColumn({ name: 'visitor_exit' })
    visitorExit: Date;

    @Column()
    visitorImagePathIdCard: string;

    @Column()
    visitorImagePathPalte: string;

    // @Column({ type: 'timestamp', default: () => 'NOW()', })
    // visitorUpdateTime: Date;

}
