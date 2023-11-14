import { IsBoolean, IsOptional } from "class-validator";
import { VisitorStatus } from "../visitor-status.enum";

export class FilterVisitorDto {
    @IsOptional()
    @IsBoolean()
    status: VisitorStatus;
}