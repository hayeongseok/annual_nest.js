import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
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

    @Post('/login')
    async login(@Body() loginDto:LoginDto):Promise<LoginDto> {
        return await this.memberService.login(loginDto);
    }

    @Post()
    async create(@Body() member:MemberDto): Promise<Member> {
        return await this.memberService.create(member);
    }
}
