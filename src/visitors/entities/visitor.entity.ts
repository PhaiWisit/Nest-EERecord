import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

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

    // @Column({  default: () => 'NOW()', })
    // visitorEnter: Date;

    // @Column({  default: () => 'NOW()', })
    // visitorExit: Date;

    @Column()
    visitorImagePathIdCard: string;

    @Column()
    visitorImagePathPalte: string;

    // @Column({ type: 'timestamp', default: () => 'NOW()', })
    // visitorUpdateTime: Date;

}
