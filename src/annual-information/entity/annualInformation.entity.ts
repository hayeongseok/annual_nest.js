import { Member } from "src/member/entity/member.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AnnualInformation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    holiday_total: number;
    
    @Column()
    holiday_remain: number;

    @Column()
    holiday_use: number;

    @Column()
    holiday_add: number;

    @OneToOne(() => Member, member => member.annualInfo)
    member: Member
}