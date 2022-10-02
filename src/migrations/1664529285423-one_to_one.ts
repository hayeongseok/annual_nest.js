import {MigrationInterface, QueryRunner} from "typeorm";

export class oneToOne1664529285423 implements MigrationInterface {
    name = 'oneToOne1664529285423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`annual_information\` DROP COLUMN \`user_email\``);
        await queryRunner.query(`ALTER TABLE \`member\` ADD \`annualInfoId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD UNIQUE INDEX \`IDX_07f97d6d937d2047f2ba00c8c4\` (\`annualInfoId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_07f97d6d937d2047f2ba00c8c4\` ON \`member\` (\`annualInfoId\`)`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_07f97d6d937d2047f2ba00c8c4b\` FOREIGN KEY (\`annualInfoId\`) REFERENCES \`annual_information\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_07f97d6d937d2047f2ba00c8c4b\``);
        await queryRunner.query(`DROP INDEX \`REL_07f97d6d937d2047f2ba00c8c4\` ON \`member\``);
        await queryRunner.query(`ALTER TABLE \`member\` DROP INDEX \`IDX_07f97d6d937d2047f2ba00c8c4\``);
        await queryRunner.query(`ALTER TABLE \`member\` DROP COLUMN \`annualInfoId\``);
        await queryRunner.query(`ALTER TABLE \`annual_information\` ADD \`user_email\` varchar(255) NOT NULL`);
    }

}
