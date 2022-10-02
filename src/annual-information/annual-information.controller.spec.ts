import { Test, TestingModule } from '@nestjs/testing';
import { AnnualInformationController } from './annual-information.controller';

describe('AnnualInformationController', () => {
  let controller: AnnualInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnualInformationController],
    }).compile();

    controller = module.get<AnnualInformationController>(AnnualInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
