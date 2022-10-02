import {MigrationInterface, QueryRunner} from "typeorm";

export class oneToOneV11664529897352 implements MigrationInterface {
    name = 'oneToOneV11664529897352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_07f97d6d937d2047f2ba00c8c4b\``);
        await queryRunner.query(`DROP INDEX \`IDX_07f97d6d937d2047f2ba00c8c4\` ON \`member\``);
        await queryRunner.query(`DROP INDEX \`REL_07f97d6d937d2047f2ba00c8c4\` ON \`member\``);
        await queryRunner.query(`ALTER TABLE \`member\` DROP COLUMN \`annualInfoId\``);
        await queryRunner.query(`ALTER TABLE \`member\` ADD UNIQUE INDEX \`IDX_97cbbe986ce9d14ca5894fdc07\` (\`id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_97cbbe986ce9d14ca5894fdc07\` ON \`member\` (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_97cbbe986ce9d14ca5894fdc072\` FOREIGN KEY (\`id\`) REFERENCES \`annual_information\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_97cbbe986ce9d14ca5894fdc072\``);
        await queryRunner.query(`DROP INDEX \`REL_97cbbe986ce9d14ca5894fdc07\` ON \`member\``);
        await queryRunner.query(`ALTER TABLE \`member\` DROP INDEX \`IDX_97cbbe986ce9d14ca5894fdc07\``);
        await queryRunner.query(`ALTER TABLE \`member\` ADD \`annualInfoId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_07f97d6d937d2047f2ba00c8c4\` ON \`member\` (\`annualInfoId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_07f97d6d937d2047f2ba00c8c4\` ON \`member\` (\`annualInfoId\`)`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_07f97d6d937d2047f2ba00c8c4b\` FOREIGN KEY (\`annualInfoId\`) REFERENCES \`annual_information\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
