import {MigrationInterface, QueryRunner} from "typeorm";

export class qna1665492835529 implements MigrationInterface {
    name = 'qna1665492835529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`member_id\` \`memberId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL COMMENT '생성 시간' DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL COMMENT '수정 시간' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`memberId\` \`memberId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`qna\` ADD CONSTRAINT \`FK_6a315c3d6a2ec1c66be2283f835\` FOREIGN KEY (\`memberId\`) REFERENCES \`member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_07f97d6d937d2047f2ba00c8c4b\` FOREIGN KEY (\`annualInfoId\`) REFERENCES \`annual_information\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_07f97d6d937d2047f2ba00c8c4b\``);
        await queryRunner.query(`ALTER TABLE \`qna\` DROP FOREIGN KEY \`FK_6a315c3d6a2ec1c66be2283f835\``);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`memberId\` \`memberId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL COMMENT '수정 시간' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL COMMENT '생성 시간' DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`memberId\` \`member_id\` int NOT NULL`);
    }

}
