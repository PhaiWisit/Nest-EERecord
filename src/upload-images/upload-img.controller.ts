import { Body, Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { join } from "path";
import { dirname } from "path";
import { GetUser } from "src/auth/get-user.decorator";
const appDir = dirname(require.main.filename);

@Controller('uploads')
@UseGuards(AuthGuard())
export class UploadImgController {

    // @Post()
    // @UseInterceptors(FileInterceptor(
    //     'file', {
    //     storage: diskStorage({
    //         destination: './uploads/img',
    //         filename: function (req, file, cb) {
    //             cb(null, file.originalname)
    //         }
    //     })
    // }))
    // uploadFile(@UploadedFile() file: Express.Multer.File) {
    //     console.log(file);
    //     return {
    //         statusCode: 200,
    //         data: `${file.destination}/${file.originalname}`,
    //     };
    // }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'imageIdCard', maxCount: 1 },
        { name: 'imagePlate', maxCount: 1 },
    ], {
        storage: diskStorage({
            destination: './uploads/img',
            filename: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })
    }))
    uploadFile(@UploadedFiles() files: { imageIdCard?: Express.Multer.File[], imagePlate?: Express.Multer.File[] }) {
        console.log(files);
        return {
            statusCode: 200,
            data: {
                "imageIdCardName": `${files.imageIdCard[0].destination}/${files.imageIdCard[0].originalname}`,
                "imagePlateName": `${files.imagePlate[0].destination}/${files.imagePlate[0].originalname}`
            }
            // data: `imageIdCard : ${files.imageIdCard[0].destination}/${files.imageIdCard[0].originalname} 
            // imagePlate : ${files.imagePlate[0].destination}/${files.imagePlate[0].originalname}`,
            // data: `Success`,
        };
    }


    @Get('/img/:imageName')
    getImage(
        @Param('imageName') imageName: string,
        @Res() res) {
        console.log(join(appDir, '..', 'uploads/img/' + imageName));
        res.sendFile(join(appDir, '..', 'uploads/img/' + imageName));
        // res.send('No access')
    }

    // @Post('/img/:imageName')
    // async getImageByName(
    //     @Body() imageData: { imageName: string },
    //     @Res() res
    // ) {
    //     const imageName: string = imageData.imageName;
    //     return res.sendFile(join(appDir, '..', 'uploads/img/' + imageName));
    // }



}

