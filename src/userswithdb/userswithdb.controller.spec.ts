import { Test, TestingModule } from '@nestjs/testing';
import { UserswithdbController } from './userswithdb.controller';
import { UserswithdbService } from './userswithdb.service';

describe('UserswithdbController', () => {
  let controller: UserswithdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserswithdbController],
      providers: [UserswithdbService],
    }).compile();

    controller = module.get<UserswithdbController>(UserswithdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
