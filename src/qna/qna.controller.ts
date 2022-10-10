import { Controller, Post, Body, Get, Param, Query, Patch } from '@nestjs/common';
import { Qna } from './entity/qna.entity';
import { QnaDto } from './qna.dto';
import { QnaService } from './qna.service';

@Controller('qna')
export class QnaController {
    constructor(
        private qnaService: QnaService
    ) {}


    @Get()
    async getOneQnA(@Query('qnaId') id:number): Promise<Qna> {
        return await this.qnaService.getOneQnA(id);
    }

    @Get()
    async getAllQnA(@Query('id') id:number) {
        return await this.qnaService.getAllQnA(id)
    }

    @Post()
    async createQnA(@Body() qnaDto: QnaDto):Promise<Qna>{
        return await this.qnaService.createQnA(qnaDto)
    }

    @Patch(':id/update_qna')
    async updateQnA(
        @Param('id') id: number,
        @Body() updateQna: QnaDto
    ) {
        return this.qnaService.updateQnA(id, updateQna);
    }
}
