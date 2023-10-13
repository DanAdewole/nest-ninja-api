import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  age: number;
  country?: string | null;
}

@Injectable()
export class UsersService {
  private users: UserInterface[] = [
    { id: 0, name: 'Daniel', email: 'randomString', age: 50 },
  ];

  private generateUniqueId(): number {
    const maxId = Math.max(...this.users.map((user) => user.id), 0);
    return maxId + 1;
  }

  create(createUserDto: CreateUserDto) {
    const existingUser = this.users.find(
      (user) => user.email === createUserDto.email,
    );

    if (existingUser) {
      throw new ConflictException('User with the email already exists');
    }

    const newUser: UserInterface = {
      id: this.generateUniqueId(),
      name: createUserDto.name,
      email: createUserDto.email,
      age: createUserDto.age,
      country: createUserDto.country ?? null,
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const toBeRemoved = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return toBeRemoved;
  }
}
