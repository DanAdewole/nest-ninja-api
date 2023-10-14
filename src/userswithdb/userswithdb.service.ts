import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserswithdbDto } from './dto/create-userswithdb.dto';
import { UpdateUserswithdbDto } from './dto/update-userswithdb.dto';
import { UserWithDb } from './entities/userswithdb.entity';

@Injectable()
export class UserswithdbService {
  constructor(
    @InjectRepository(UserWithDb)
    private userWithDbRepository: Repository<UserWithDb>,
  ) {}

  async createUser(createUserswithdbDto: CreateUserswithdbDto): Promise<UserWithDb> {
    return 
  }

  async getUsers() {
    return `This action returns all userswithdb`;
  }

  async getUser(id: number) {
    return `This action returns a #${id} userswithdb`;
  }

  async updateUser(id: number, updateUserswithdbDto: UpdateUserswithdbDto) {
    return `This action updates a #${id} userswithdb`;
  }

  async removeUser(id: number) {
    return `This action removes a #${id} userswithdb`;
  }
}
