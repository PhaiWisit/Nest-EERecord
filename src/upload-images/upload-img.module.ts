import { Module } from "@nestjs/common";
import { UploadImgController } from "./upload-img.controller";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [
      AuthModule,
    //   TypeOrmModule.forFeature([Visitor]),
    ],
    controllers: [UploadImgController],
    // providers: [VisitorsService, VisitorsRepository],
    // exports: [VisitorsService],
  })
  export class UploadImgModule { }