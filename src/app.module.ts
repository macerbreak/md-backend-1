import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { StationFollowsModule } from './station-follows/station-follows.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { StationFollowsModel } from './station-follows/station-follows.model';
import { ConfigModule } from '@nestjs/config';
import { StationsHistoryModule } from './stations-history/stations-history.module';
import { StationHistoryModel } from './stations-history/stations-history.model';

@Module({
  imports: [
    HttpModule,
    StationFollowsModule,
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD.toString(),
      database: process.env.POSTGRES_DB,
      models: [StationFollowsModel, StationHistoryModel],
      autoLoadModels: true,
    }),
    StationsHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
