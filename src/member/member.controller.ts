import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MemberDto } from './dto/member.dto';
import { Member } from './entity/member.entity';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    constructor(
        private memberService: MemberService
    ){}

    @Get()
    async getAll(): Promise<Member[]> {
        return await this.memberService.getAll();
    }

    @Get('/:id')
    async getOne(@Param('id') id: number): Promise<Member> {
        return await this.memberService.getOne(id);
    }

    @Post()
    async create(@Body() member:MemberDto): Promise<Member> {
        return await this.memberService.create(member);
    }
}
