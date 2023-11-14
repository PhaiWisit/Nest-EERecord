import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Visitor } from './entities/visitor.entity';
import { User } from 'src/auth/user.entity';
import { VisitorsRepository } from './visitors.repository';
import { FilterVisitorDto } from './dto/filter-visitor.dto';
@Injectable()
export class VisitorsService {

  constructor(
    @InjectRepository(VisitorsRepository)
    private visitorRepository: VisitorsRepository,
  ) { }

  createAndUpload(
    createVisitorDto: CreateVisitorDto,
    user: User,
    imageIdCard_Path: string,
    imagePlate_Path: string
  ): Promise<Visitor> {
    return this.visitorRepository.createAndUpload(createVisitorDto, user, imageIdCard_Path, imagePlate_Path);
  }

  createVisitor(createVisitorDto: CreateVisitorDto, user: User): Promise<Visitor> {
    return this.visitorRepository.createVisitor(createVisitorDto, user);
  }

  getVisitors(filterDto: FilterVisitorDto, user: User): Promise<Visitor[]> {
    return this.visitorRepository.getVisitors(filterDto, user);
  }

  async getVisitorById(id: string, user: User): Promise<Visitor> {
    const visitor = await this.visitorRepository.getVisitorById(id, user)
    if (!visitor) {
      throw new NotFoundException(`Visitor with ID ${id} not found`);
    }
    return visitor;
  }

  async updateStatus(id: string, user: User, updateVisitorDto: UpdateVisitorDto,): Promise<Visitor> {
    const visitor = await this.getVisitorById(id, user);
    visitor.visitorStatus = updateVisitorDto.visitorStatus;
    await this.visitorRepository.save(visitor);
    return visitor;
  }

  async deleteVisitor(id: string, user: User) {
    const result = await this.visitorRepository.delete({ id, user });
    if (result.affected === 0) {
      throw new NotFoundException(`Visitor with ID ${id} not found`);
    }
    return {
      statusCode: 200,
      message: `Visitor with ID ${id} was deleted`
    }

  }
}
