import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { VisitorsController } from './visitors.controller';
import { VisitorsRepository } from './visitors.repository';
import { VisitorsService } from './visitors.service';
import { Visitor } from './entities/visitor.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Visitor]),
  ],
  controllers: [VisitorsController],
  providers: [VisitorsService, VisitorsRepository],
  exports: [VisitorsService],
})
export class VisitorsModule { }
