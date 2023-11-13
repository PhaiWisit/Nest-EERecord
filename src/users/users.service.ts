import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

  ) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.findOne({
      where: {
        userName: createUserDto.userName,
      },
    });

    if (!user) {
      throw new BadRequestException('Error').message;
    }
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async getMe(username: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        userName: username,
      },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  findOne(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id: id });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
