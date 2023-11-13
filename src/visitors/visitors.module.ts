import { Module } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { VisitorsController } from './visitors.controller';
import { Visitor } from './entities/visitor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { VisitorRepository } from './visitors.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Visitor]),
    UsersModule],
  controllers: [VisitorsController],
  providers: [VisitorsService, VisitorRepository],
  exports: [VisitorsService],
})
export class VisitorsModule { }
