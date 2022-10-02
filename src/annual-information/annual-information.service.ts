import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnualInformation } from './entity/annualInformation.entity';
import { AnnualInformationRepository } from './repository/annualInformation.repository';

@Injectable()
export class AnnualInformationService {
    constructor(
        @InjectRepository(AnnualInformation)
        private annualInformationRepository: AnnualInformationRepository
    ){}

    async getAll(): Promise<AnnualInformation[]> {
        return await this.annualInformationRepository.find();
    }

    async getOne(id: number): Promise<AnnualInformation> {
        return await this.annualInformationRepository.findOne(id);
    }

        async create(annualInformation: AnnualInformation):Promise<AnnualInformation> {
            return await this.annualInformationRepository.save(annualInformation);
    }

    async holidayUseUpdate(id:number, annualInformation:AnnualInformation): Promise<void> {
        await this.annualInformationRepository.update(id, annualInformation);
    }
}
