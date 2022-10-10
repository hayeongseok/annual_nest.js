import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AnnualInformationService } from './annual-information.service';
import { AnnualInformation } from './entity/annualInformation.entity';

@Controller('annual-information')
export class AnnualInformationController {
    constructor(
        private annualInformationService: AnnualInformationService
    ){}

    @Get()
    async getAll(): Promise<AnnualInformation[]> {
        return await this.annualInformationService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number): Promise<AnnualInformation> {
        return await this.annualInformationService.getOne(id);
    }

    @Post()
    async create(@Body() annualInformation:AnnualInformation): Promise<AnnualInformation> {
        return await this.annualInformationService.create(annualInformation);
    }
}
