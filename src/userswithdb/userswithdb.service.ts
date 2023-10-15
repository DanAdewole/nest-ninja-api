import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common/enums';
import {
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { CreateUserswithdbDto } from './dto/create-userswithdb.dto';
import { UpdateUserswithdbDto } from './dto/update-userswithdb.dto';
import { UserWithDb } from './entities/userswithdb.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UserswithdbService {
  constructor(
    @InjectRepository(UserWithDb)
    private userWithDbRepository: Repository<UserWithDb>,
  ) { }

  async createUser(createUserDto: CreateUserswithdbDto): Promise<UserWithDb> {
    const newUser = this.userWithDbRepository.create(createUserDto);
    return await this.userWithDbRepository.save(newUser);
  }

  async getUsers(): Promise<UserWithDb[]> {
    return await this.userWithDbRepository.find();
  }

  async getUser(id: number): Promise<UserWithDb> {
    try {
      const user = await this.userWithDbRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  async updateUser(
    id: number,
    updateUserswithdbDto: UpdateUserswithdbDto,
  ): Promise<UserWithDb> {
    try {
      const updateUser = await this.userWithDbRepository.update(
        id,
        updateUserswithdbDto,
      );
      if (updateUser.affected > 0) {
        return await this.userWithDbRepository.findOne({ where: { id } });
      } else {
        throw new NotFoundException(`User not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Error updating user');
    }
  }

  async removeUser(id: number): Promise<void> {
    try {
      const user = await this.userWithDbRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      await this.userWithDbRepository.delete(id);
    } catch (error) {
      throw new NotFoundException('User not found');
    }
    
    
  }
}
