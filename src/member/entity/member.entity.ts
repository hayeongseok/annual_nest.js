import { AnnualApplication } from "src/annual-application/entity/annualApplication.entity";
import { AnnualInformation } from "src/annual-information/entity/annualInformation.entity";
import { Qna } from "src/qna/entity/qna.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    user_email: string;

    @Column()
    password: string;

    @Column()
    annualInfoId: number;

    // 타 테이블 join 해서 가져오는 방법
    @OneToOne(type => AnnualInformation, (annualInfo) => annualInfo.member)
    @JoinColumn()
    annualInfo: AnnualInformation;

    @OneToMany(type => Qna, qna => qna.member)
    qnas: Qna[] 

    // @OneToMany(type => AnnualApplication, annualApplication => annualApplication.member_id)
    // annualApplication: AnnualApplication[];
}