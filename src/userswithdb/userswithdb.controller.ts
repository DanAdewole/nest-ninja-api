import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserswithdbService } from './userswithdb.service';
import { CreateUserswithdbDto } from './dto/create-userswithdb.dto';
import { UpdateUserswithdbDto } from './dto/update-userswithdb.dto';

@Controller('userswithdb')
export class UserswithdbController {
  constructor(private readonly userswithdbService: UserswithdbService) {}

  @Post()
  createUser(@Body() createUserswithdbDto: CreateUserswithdbDto) {
    return this.userswithdbService.createUser(createUserswithdbDto);
  }

  @Get()
  getUsers() {
    return this.userswithdbService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userswithdbService.getUser(+id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserswithdbDto: UpdateUserswithdbDto) {
    return this.userswithdbService.updateUser(+id, updateUserswithdbDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.userswithdbService.removeUser(+id);
  }
}
