import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { UserswithdbModule } from './userswithdb/userswithdb.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NinjasModule,
    UsersModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: ['dist/**/*.entity.js'],
        // synchronize: true,
      }),
    }),
    UserswithdbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
