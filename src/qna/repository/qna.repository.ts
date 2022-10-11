import { Repository } from "typeorm";
import { Qna } from "../entity/qna.entity"
import { QnaDto } from "../qna.dto";

export class QnaRepository extends Repository<Qna> {}