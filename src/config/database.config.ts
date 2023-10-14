import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
	type: 'mysql',
	host: process.env.DB_HOST || 'localhost',
	port: parseInt(process.env.DB_PORT, 10) || 3306,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: ['dist/**/*.entity.js'],
	synchronize: true,
	migrations: ['dist/dd/migrations/*.js'],
}))