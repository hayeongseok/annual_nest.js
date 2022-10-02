import { Body, Controller, Post } from '@nestjs/common';
import { AnnualApplicationService } from './annual-application.service';
import { AnnualApplication } from './entity/annualApplication.entity';

@Controller('annual-application')
export class AnnualApplicationController {
    constructor(
        private annualApplicationService: AnnualApplicationService
    ){}

    @Post()
    async create(@Body() annualApplication: AnnualApplication): Promise<void> {
        return await this.annualApplicationService.create(annualApplication);
    }
}
