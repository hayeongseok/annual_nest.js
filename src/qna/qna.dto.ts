import { Member } from "src/member/entity/member.entity";

export class QnaDto {
    member: Member;    
    title: string;
    body: string;
    update_ed_at?: Date;
}