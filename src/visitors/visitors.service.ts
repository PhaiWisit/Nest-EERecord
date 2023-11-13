import { Injectable } from '@nestjs/common';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitor } from './entities/visitor.entity';
import { User } from 'src/auth/user.entity';
// import { UsersController } from 'src/users/users.controller';
// import { UsersService } from 'src/users/users.service';
import { VisitorRepository } from './visitors.repository';

@Injectable()
export class VisitorsService {

  constructor(

    // With Foreint key
    @InjectRepository(VisitorRepository)
    private visitorRepository: VisitorRepository,


    // @InjectRepository(Visitor)
    // private visitorRepository: Repository<Visitor>,

  ) { }

  createVisitor(createVisitorDto: CreateVisitorDto, user: User): Promise<Visitor> {
    // const visitor = this.visitorRepository.create(createVisitorDto);
    // let user = await this.usersService.findOne(1);
    // user = new User();
    // visitor.user = user;
    return this.visitorRepository.createVisitor(createVisitorDto, user);
  }

  //Create with no foreign key
  // create(createVisitorDto: CreateVisitorDto): Promise<Visitor> {
  //   return this.visitorRepository.save(createVisitorDto);

  // }

  findAll() {
    return this.visitorRepository.find();
  }

  // findOne(id: number): Promise<Visitor | null> {
  //   return this.visitorRepository.findOneBy({ id });
  // }

  // update(id: number, updateVisitorDto: UpdateVisitorDto) {
  //   return this.visitorRepository.update(id, updateVisitorDto);
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} visitor`;
  // }
}
