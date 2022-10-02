import { Test, TestingModule } from '@nestjs/testing';
import { AnnualApplicationController } from './annual-application.controller';

describe('AnnualApplicationController', () => {
  let controller: AnnualApplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnualApplicationController],
    }).compile();

    controller = module.get<AnnualApplicationController>(AnnualApplicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
