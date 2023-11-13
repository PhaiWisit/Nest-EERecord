import {
  ConflictException,
  InternalServerErrorException
} from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/createUserDto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, villageName, email } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword, villageName, email });

    try {
      await this.save(user);
      return user;
    } catch (error) {

      if (error.code === 'ER_DUP_ENTRY') {
        console.log('Username already exists');
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
