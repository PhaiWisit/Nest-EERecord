import { Injectable } from '@nestjs/common';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitor } from './entities/visitor.entity';

@Injectable()
export class VisitorsService {

  constructor(
    @InjectRepository(Visitor)
    private visitorRepository: Repository<Visitor>,
  ) { }

  create(createVisitorDto: CreateVisitorDto) {
    return this.visitorRepository.save(createVisitorDto);
  }

  findAll() {
    return `This action returns all visitors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitor`;
  }

  update(id: number, updateVisitorDto: UpdateVisitorDto) {
    return `This action updates a #${id} visitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitor`;
  }
}
