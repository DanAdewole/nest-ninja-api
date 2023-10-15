import { MigrationInterface, QueryRunner } from "typeorm";

export class Ninja1697391008499 implements MigrationInterface {
    name = 'Ninja1697391008499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_with_db\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_with_db\` DROP COLUMN \`password\``);
    }

}
