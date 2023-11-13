import { EntityRepository } from "typeorm/decorator/EntityRepository";
import { Visitor } from "./entities/visitor.entity";
import { AbstractRepository, DataSource, Repository } from "typeorm";
import { Injectable, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { CreateVisitorDto } from "./dto/create-visitor.dto";
import { User } from "src/auth/user.entity";

@EntityRepository(Visitor)
@Injectable()
export class VisitorsRepository extends Repository<Visitor> {
  private logger = new Logger('VisitorsRepository');
  constructor(private dataSource: DataSource) {
    super(Visitor, dataSource.createEntityManager());
  }

  async getVisitors(
    // filterDto: GetTasksFilterDto, 
    user: User): Promise<Visitor[]> {
    // const { status, search } = filterDto;

    const query = this.createQueryBuilder('visitor');
    query.where({ user });

    // if (status) {
    //   query.andWhere('task.status = :status', { status });
    // }

    // if (search) {
    //   query.andWhere(
    //     '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
    //     { search: `%${search}%` },
    //   );
    // }

    try {
      const tasks = await query.getMany();
      return tasks;
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