import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, UseGuards, Query } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { Visitor } from './entities/visitor.entity';
import { User } from 'src/auth/user.entity';
import { log } from 'console';
import { GetUser } from 'src/auth/get-user.decorator';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Throttle } from '@nestjs/throttler';
import { FilterVisitorDto } from './dto/filter-visitor.dto';

@Controller('visitors')
@UseGuards(AuthGuard())
export class VisitorsController {
  private logger = new Logger('VisitorController');
  constructor(
    private readonly visitorsService: VisitorsService,
  ) { }

  @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Post()
  async createVisitor(
    @Body() createVisitorDto: CreateVisitorDto,
    @GetUser() user: User,
  ): Promise<Visitor> {
    return this.visitorsService.createVisitor(createVisitorDto, user);
  }


  @Get()
  getVisitors(
    @Query() filterDto: FilterVisitorDto,
    @GetUser() user: User): Promise<Visitor[]> {
    return this.visitorsService.getVisitors(filterDto, user);
  }


  @Get('/:id')
  getVisitorById(
    @Param('id') id: string,
    @GetUser() user: User
  ): Promise<Visitor> {
    return this.visitorsService.getVisitorById(
      id, user
    );
  }


  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() updateVisitorDto: UpdateVisitorDto,
    @GetUser() user: User) {
    return this.visitorsService.updateStatus(id, user, updateVisitorDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user: User) {
    return this.visitorsService.deleteVisitor(id, user);
  }
}


