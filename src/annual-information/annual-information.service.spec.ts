import { Test, TestingModule } from '@nestjs/testing';
import { AnnualInformationService } from './annual-information.service';

describe('AnnualInformationService', () => {
  let service: AnnualInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnualInformationService],
    }).compile();

    service = module.get<AnnualInformationService>(AnnualInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
