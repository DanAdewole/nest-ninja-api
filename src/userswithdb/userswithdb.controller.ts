import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserswithdbService } from './userswithdb.service';
import { CreateUserswithdbDto } from './dto/create-userswithdb.dto';
import { UpdateUserswithdbDto } from './dto/update-userswithdb.dto';

@Controller('userswithdb')
export class UserswithdbController {
  constructor(private readonly userswithdbService: UserswithdbService) {}

  @Post()
  create(@Body() createUserswithdbDto: CreateUserswithdbDto) {
    return this.userswithdbService.create(createUserswithdbDto);
  }

  @Get()
  findAll() {
    return this.userswithdbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userswithdbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserswithdbDto: UpdateUserswithdbDto) {
    return this.userswithdbService.update(+id, updateUserswithdbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userswithdbService.remove(+id);
  }
}
