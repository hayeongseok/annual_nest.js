import { Member } from "src/member/entity/member.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AnnualApplication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    member_id: number;

    @Column()
    start: number;

    @Column()
    end: number;

    @Column()
    use: number;

    @Column()
    type: number;

    // @ManyToOne(type => Member, member => member.id)
    // member: Member;

}