import { Test, TestingModule } from '@nestjs/testing';
import { AnnualApplicationService } from './annual-application.service';

describe('AnnualApplicationService', () => {
  let service: AnnualApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnualApplicationService],
    }).compile();

    service = module.get<AnnualApplicationService>(AnnualApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
