import { Member } from "src/member/entity/member.entity";
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { qnaStatus } from "../enum/qna.enum";

@Entity()
export class Qna {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    memberId: number;

    // @Column()
    // memberId: string;

    @ManyToOne(type => Member, member => member.qnas)
    member: Member;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    status: qnaStatus;

    @CreateDateColumn({type:'datetime', default: () => "CURRENT_TIMESTAMP()", comment: '생성 시간' })
    created_at: Date;

    @UpdateDateColumn({type:'datetime', default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()", comment: '수정 시간' })
    updated_at: Date;
}