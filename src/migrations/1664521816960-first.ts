import {MigrationInterface, QueryRunner} from "typeorm";

export class first1664521816960 implements MigrationInterface {
    name = 'first1664521816960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`annual_information\` ADD \`user_email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`member\` DROP COLUMN \`user_email\``);
        await queryRunner.query(`ALTER TABLE \`member\` ADD \`user_email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`member\` DROP COLUMN \`user_email\``);
        await queryRunner.query(`ALTER TABLE \`member\` ADD \`user_email\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`annual_information\` DROP COLUMN \`user_email\``);
    }

}
