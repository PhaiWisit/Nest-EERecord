import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitor } from './entities/visitor.entity';
import { User } from 'src/auth/user.entity';
import { VisitorsRepository } from './visitors.repository';
import e from 'express';

@Injectable()
export class VisitorsService {

  constructor(
    @InjectRepository(VisitorsRepository)
    private visitorRepository: VisitorsRepository,
  ) { }

  createVisitor(createVisitorDto: CreateVisitorDto, user: User): Promise<Visitor> {
    return this.visitorRepository.createVisitor(createVisitorDto, user);
  }

  getVisitors(user: User): Promise<Visitor[]> {
    return this.visitorRepository.getVisitors(user);
  }

  async getVisitorById(id: string, user: User): Promise<Visitor> {
    const visitor = await this.visitorRepository.getVisitorById(id, user)

    if (!visitor) {
      throw new NotFoundException(`Visitor with ID ${id} not found`);
    }

    return visitor;
  }

  // async getVisitorById(id: string, user: User) {

  //   const found = await this.visitorRepository.findOne(
  //     {
  //       where: {
  //         id,
  //         user
  //       }
  //     }
  //   );
  //   if (!found) {
  //     throw new NotFoundException(`Visitor with ID ${id} not found`);
  //   }

  //   return found;
  // }

  async updateStatus(id: string, user: User, updateVisitorDto: UpdateVisitorDto,): Promise<Visitor> {
    // const visitor = await this.getVisitorById(id);
    const visitor = await this.getVisitorById(id, user);
    visitor.visitorStatus = updateVisitorDto.visitorStatus;
    await this.visitorRepository.save(visitor);
    return visitor;
  }

  async deleteVisitor(id: string, user: User): Promise<string> {
    // const visitor = await this.getVisitorById(id, user);

    // await this.visitorRepository.delete(visitor);
    return 'removed';
  }

  // remove(id: string) {
  //   return this.visitorRepository.remove(id);
  // }
}
