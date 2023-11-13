import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, UseGuards } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { Visitor } from './entities/visitor.entity';
import { User } from 'src/auth/user.entity';
import { log } from 'console';
import { GetUser } from 'src/auth/get-user.decorator';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('visitors')
export class VisitorsController {
  private logger = new Logger('VisitorController');
  constructor(
    private readonly visitorsService: VisitorsService,

  ) { }

  // Create with no foreign key
  // @Post()
  // create(@Body() createVisitorDto: CreateVisitorDto) {
  //   const visitor = this.visitorsService.create(createVisitorDto);
  //   return visitor;
  // }

  @UseGuards(AuthGuard())
  @Post()
  async createVisitor(
    @Body() createVisitorDto: CreateVisitorDto,
    @GetUser() user: User,
  ): Promise<Visitor> {
    console.log(user);

    // const user = await this.usersService.findOne("1cf6b6f0-ea3c-4ab0-95e1-549f0be7e691");
    // this.logger.verbose(
    //   `User "${user.id}" creating a new task. Data: ${JSON.stringify(
    //     createVisitorDto,
    //   )}`,
    // );
    return this.visitorsService.createVisitor(createVisitorDto, user);
  }

  @Get()
  findAll() {
    return this.visitorsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.visitorsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVisitorDto: UpdateVisitorDto) {
  //   return this.visitorsService.update(+id, updateVisitorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.visitorsService.remove(+id);
  // }
}


