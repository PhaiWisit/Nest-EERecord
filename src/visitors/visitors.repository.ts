import { EntityRepository } from "typeorm/decorator/EntityRepository";
import { Visitor } from "./entities/visitor.entity";
import { AbstractRepository, DataSource, Repository } from "typeorm";
import { Injectable, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { CreateVisitorDto } from "./dto/create-visitor.dto";
import { User } from "src/auth/user.entity";
import { FilterVisitorDto } from "./dto/filter-visitor.dto";

@EntityRepository(Visitor)
@Injectable()
export class VisitorsRepository extends Repository<Visitor> {
  private logger = new Logger('VisitorsRepository');
  constructor(private dataSource: DataSource) {
    super(Visitor, dataSource.createEntityManager());
  }

  async getVisitors(
    filterDto: FilterVisitorDto,
    user: User): Promise<Visitor[]> {
    const {status} = filterDto;

    const query = this.createQueryBuilder('visitor');
    query.where({ user });
    query.orderBy('visitorUpdate', 'DESC');

    if (status) {
    query.andWhere('visitor.visitorStatus = :status', { status });
    }

    // if (search) {
    //   query.andWhere(
    //     '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
    //     { search: `%${search}%` },
    //   );
    // }

    try {
      const visitors = await query.getMany();
      return visitors;
    } catch (error) {
      //   this.logger.error(
      //     `Failed to get tasks for user "${
      //       user.username
      //     }". Filters: ${JSON.stringify(filterDto)}`,
      //     error.stack,
      //   );
      throw new InternalServerErrorException();
    }
  }

  async getVisitorById(id: string, user: User): Promise<Visitor> {
    const query = this.createQueryBuilder('visitor');
    query.where({ id, user });
    const visitor = await query.getOne();
    return visitor;
  }


  async createVisitor(createVisitorDto: CreateVisitorDto, user: User): Promise<Visitor> {
    const { visitorHouseNumber,
      visitorContactMatter,
      visitorEnter,
      visitorExit,
      visitorImagePathIdCard,
      visitorImagePathPalte,
      visitorStatus,
      visitorVehicleType } = createVisitorDto;
    const visitor = this.create({
      visitorHouseNumber,
      visitorContactMatter,
      visitorEnter,
      visitorExit,
      visitorImagePathIdCard,
      visitorImagePathPalte,
      visitorVehicleType,
      visitorStatus,
      user,
    });
    await this.save(visitor);
    return visitor;
  }
}