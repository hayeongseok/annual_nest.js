import { Module } from '@nestjs/common';
import { AnnualInformationService } from './annual-information.service';
import { AnnualInformationController } from './annual-information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnualInformation } from './entity/annualInformation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnnualInformation])
  ],
  providers: [AnnualInformationService],
  controllers: [AnnualInformationController]
})
export class AnnualInformationModule {}
