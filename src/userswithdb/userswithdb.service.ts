import { Injectable } from '@nestjs/common';
import { CreateUserswithdbDto } from './dto/create-userswithdb.dto';
import { UpdateUserswithdbDto } from './dto/update-userswithdb.dto';

@Injectable()
export class UserswithdbService {
  create(createUserswithdbDto: CreateUserswithdbDto) {
    return 'This action adds a new userswithdb';
  }

  findAll() {
    return `This action returns all userswithdb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userswithdb`;
  }

  update(id: number, updateUserswithdbDto: UpdateUserswithdbDto) {
    return `This action updates a #${id} userswithdb`;
  }

  remove(id: number) {
    return `This action removes a #${id} userswithdb`;
  }
}
