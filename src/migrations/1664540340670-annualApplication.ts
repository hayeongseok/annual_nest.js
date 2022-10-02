import {MigrationInterface, QueryRunner} from "typeorm";

export class annualApplication1664540340670 implements MigrationInterface {
    name = 'annualApplication1664540340670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_07f97d6d937d2047f2ba00c8c4\` ON \`member\``);
        await queryRunner.query(`CREATE TABLE \`annual_application\` (\`id\` int NOT NULL AUTO_INCREMENT, \`member_id\` int NOT NULL, \`start\` int NOT NULL, \`end\` int NOT NULL, \`use\` int NOT NULL, \`type\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_07f97d6d937d2047f2ba00c8c4b\``);
        await queryRunner.query(`ALTER TABLE \`member\` CHANGE \`annualInfoId\` \`annualInfoId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_07f97d6d937d2047f2ba00c8c4b\` FOREIGN KEY (\`annualInfoId\`) REFERENCES \`annual_information\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_07f97d6d937d2047f2ba00c8c4b\``);
        await queryRunner.query(`ALTER TABLE \`member\` CHANGE \`annualInfoId\` \`annualInfoId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_07f97d6d937d2047f2ba00c8c4b\` FOREIGN KEY (\`annualInfoId\`) REFERENCES \`annual_information\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`annual_application\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_07f97d6d937d2047f2ba00c8c4\` ON \`member\` (\`annualInfoId\`)`);
    }

}
