import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnualApplication } from 'src/annual-application/entity/annualApplication.entity';
import { AnnualInformationService } from 'src/annual-information/annual-information.service';
import { AnnualInformation } from 'src/annual-information/entity/annualInformation.entity';
import { Member } from './entity/member.entity';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Member, AnnualInformation, AnnualApplication])
  ],
  controllers: [MemberController],
  providers: [MemberService, AnnualInformationService]
})
export class MemberModule {}
