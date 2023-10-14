import { PartialType } from '@nestjs/mapped-types';
import { CreateUserswithdbDto } from './create-userswithdb.dto';

export class UpdateUserswithdbDto extends PartialType(CreateUserswithdbDto) {}
