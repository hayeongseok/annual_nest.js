import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnualInformationService } from 'src/annual-information/annual-information.service';
import { MemberDto } from './dto/member.dto';
import { Member } from './entity/member.entity';
import { MemberRopository } from './repository/member.repository';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(Member)
        private memberRepository: MemberRopository,
        // module 파일에도 추가
        private annualInformationService: AnnualInformationService
    ){}



    async getAll():Promise<Member[]> {
        return await this.memberRepository.find({relations: ["annualInfo"]});
    }

    async getOne(id: number):Promise<Member> {
        return await this.memberRepository.findOne(id, {relations: ["annualInfo"]});
    }

    async login(loginDto: LoginDto):Promise<LoginDto> {
        return await this.memberRepository.findOne(loginDto);
    }
 
    async create(member: MemberDto):Promise<Member> {
        let obj:any = member.holiday;
        let createHoliday = await this.annualInformationService.create(obj);
        member.annualInfoId = createHoliday.id
        
        return await this.memberRepository.save(member);
    }
}
