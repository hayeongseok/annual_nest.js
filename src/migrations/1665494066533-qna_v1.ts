import {MigrationInterface, QueryRunner} from "typeorm";

export class qnaV11665494066533 implements MigrationInterface {
    name = 'qnaV11665494066533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`qna\` DROP FOREIGN KEY \`FK_6a315c3d6a2ec1c66be2283f835\``);
        await queryRunner.query(`ALTER TABLE \`qna\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`qna\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL COMMENT '생성 시간' DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL COMMENT '수정 시간' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`memberId\` \`memberId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`qna\` ADD CONSTRAINT \`FK_6a315c3d6a2ec1c66be2283f835\` FOREIGN KEY (\`memberId\`) REFERENCES \`member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`qna\` DROP FOREIGN KEY \`FK_6a315c3d6a2ec1c66be2283f835\``);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`memberId\` \`memberId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL COMMENT '수정 시간' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`qna\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL COMMENT '생성 시간' DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`qna\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`qna\` ADD \`status\` enum ('Y', 'N') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`qna\` ADD CONSTRAINT \`FK_6a315c3d6a2ec1c66be2283f835\` FOREIGN KEY (\`memberId\`) REFERENCES \`member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
