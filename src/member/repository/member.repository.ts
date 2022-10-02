import { Repository } from "typeorm";
import { Member } from "../entity/member.entity";

export class MemberRopository extends Repository<Member> {}