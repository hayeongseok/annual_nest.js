import { Module } from '@nestjs/common';
import { AnnualApplicationService } from './annual-application.service';
import { AnnualApplicationController } from './annual-application.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnualApplication } from './entity/annualApplication.entity';
import { AnnualInformationService } from 'src/annual-information/annual-information.service';
import { AnnualInformation } from 'src/annual-information/entity/annualInformation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnnualApplication, AnnualInformation])
  ],
  providers: [AnnualApplicationService, AnnualInformationService],
  controllers: [AnnualApplicationController]
})
export class AnnualApplicationModule {}
