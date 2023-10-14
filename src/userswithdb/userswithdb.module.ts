import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserswithdbService } from './userswithdb.service';
import { UserswithdbController } from './userswithdb.controller';
import { UserWithDb } from './entities/userswithdb.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserWithDb])],
  controllers: [UserswithdbController],
  providers: [UserswithdbService],
})
export class UserswithdbModule {}
