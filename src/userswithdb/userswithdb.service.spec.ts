import { Test, TestingModule } from '@nestjs/testing';
import { UserswithdbService } from './userswithdb.service';

describe('UserswithdbService', () => {
  let service: UserswithdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserswithdbService],
    }).compile();

    service = module.get<UserswithdbService>(UserswithdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
