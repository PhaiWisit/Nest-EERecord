import { Module } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { VisitorsController } from './visitors.controller';
import { Visitor } from './entities/visitor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { VisitorRepository } from './visitors.repository';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Visitor]),
    UsersModule,
  ],
  controllers: [VisitorsController],
  providers: [VisitorsService, VisitorRepository,AuthService],
  exports: [VisitorsService],
})
export class VisitorsModule { }
