import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
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
  getUser(@Param('id') id: number) {
    return this.userswithdbService.getUser(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserswithdbDto: UpdateUserswithdbDto,
  ) {
    return this.userswithdbService.updateUser(id, updateUserswithdbDto);
  }

  @Delete(':id')
  @HttpCode(204)
  removeUser(@Param('id') id: number) {
    return this.userswithdbService.removeUser(id);
  }
}
