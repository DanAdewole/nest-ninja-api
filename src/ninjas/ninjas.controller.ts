import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
	constructor(private readonly ninjasService: NinjasService) {}
  // GET /ninjas?weapon=sword --> []
  @Get()
  getNinjas(@Query('weapon') weapon: "stars" | "nunchucks") {
	//   const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon) ;
  }
 
  // GET /ninjas/id --> { ... }
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  // POST /ninjas
  @Post()	
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  // PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto ) {
	  return {
		  id,
		  name: updateNinjaDto.name,
	};
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return { id };
  }
}
