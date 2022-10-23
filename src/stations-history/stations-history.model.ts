import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { StationFollowsModel } from '../station-follows/station-follows.model';

interface StationsHistoryCreation {
  country: string;
  city: string;
  latitude?: number;
  longitude?: number;
  date?: Date;
  aqi?: number;
  stationId?: number;
}
@Table({ tableName: 'stations-history' })
export class StationHistoryModel extends Model<
  StationHistoryModel,
  StationsHistoryCreation
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, allowNull: true })
  country: string;
  @Column({ type: DataType.STRING, allowNull: true })
  city: string;
  @Column({ type: DataType.FLOAT, allowNull: true })
  latitude: number;
  @Column({ type: DataType.FLOAT, allowNull: true })
  longitude: number;
  @Column({ type: DataType.DATE, allowNull: true })
  date: Date;
  @Column({ type: DataType.INTEGER, allowNull: true })
  aqi: number;
  @ForeignKey(() => StationFollowsModel)
  @Column({ type: DataType.INTEGER, allowNull: true })
  stationId: number;
  @BelongsTo(() => StationFollowsModel)
  station: StationFollowsModel;
}
