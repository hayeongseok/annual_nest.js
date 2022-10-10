import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Qna } from './entity/qna.entity';
import { QnaDto } from './qna.dto';
import { QnaRepository } from './repository/qna.repository';

@Injectable()
export class QnaService {
    constructor(
        @InjectRepository(Qna)    
        private qnaRepository: QnaRepository
    ){}

    async getOneQnA(qnaId: number): Promise<Qna> {
        return await this.qnaRepository.findOne(qnaId);
    }

    async getAllQnA(id: number) {
        let pageNumber = (id - 1) * 10

        let getAllQnA =  this.qnaRepository.createQueryBuilder('qna')
        .where('qna.status = :status', {status: 'Y' })
        .orderBy('id', 'DESC')
        .skip(pageNumber)
        .take(10)
        .getMany();
        
        return getAllQnA
    }

    async createQnA(qnaDto: QnaDto):Promise<Qna> {
        return await this.qnaRepository.save(qnaDto);
    }
    

    async updateQnA(id: number, updateQna: QnaDto) {
        let qna = await this.getOneQnA(id);
        qna.title = updateQna.title;
        qna.body = updateQna.body;

        return this.qnaRepository.save(qna);
    }
}
