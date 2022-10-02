import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnualInformationService } from 'src/annual-information/annual-information.service';
import { AnnualApplication } from './entity/annualApplication.entity';
import { AnnualApplicationRepository } from './repository/annualApplication.repository';

@Injectable()
export class AnnualApplicationService {
    constructor(
        @InjectRepository(AnnualApplication)
        private annualApplicationRepository: AnnualApplicationRepository,
        private annualInformationService: AnnualInformationService
    ){}

    async create(annualApplication: AnnualApplication): Promise<void> {
        // 1. 연차 개수 확인
        let holidayRemain = await this.annualInformationService.getOne(annualApplication.member_id)
    
        // 2. 연차 신청 가능 시 연차 신청 진행
        if(holidayRemain.holiday_remain > 0) {
            try {
                // 연차 신청 진행
                let holiday = await this.annualApplicationRepository.save(annualApplication); 
                
                // 3. 연차 신청이 진행되면 연차 사용한거 information 테이블에서 빼기
                let holiday_remain = holidayRemain.holiday_remain - holiday.use 
                holidayRemain.holiday_remain = holiday_remain
                holidayRemain.holiday_use = holidayRemain.holiday_use + holiday.use

                // information 업데이트 만들기
                await this.annualInformationService.holidayUseUpdate(annualApplication.member_id, holidayRemain)

            } catch(e) {
                throw new UnauthorizedException('연차 신청이 안됐습니다.') 
            }

        } else {
            throw new UnauthorizedException('남은 연차가 없습니다.') // 연차 없다는 오류 문구 표시
        }
    }
}
