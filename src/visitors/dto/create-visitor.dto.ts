import { Timestamp } from "typeorm";

export class CreateVisitorDto {
    visitorId: number;
    userId: string;
    visitorStatus: boolean;
    visitorHouseNumber: string;
    visitorContactMatter: string;
    visitorVehicleType: string;
    visitorEnter: Date;
    visitorExit: Date;
    visitorImagePathIdCard: string;
    visitorImagePathPalte: string;
    // visitorUpdatetime: Date;
}
