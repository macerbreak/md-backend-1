import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { StationHistoryModel } from '../stations-history/stations-history.model';

interface StationFollowsModelCreationAttrs {
  country: string;
  city: string;
  latitude?: number;
  longitude?: number;
}
@Table({ tableName: 'station-follows' })
export class StationFollowsModel extends Model<
  StationFollowsModel,
  StationFollowsModelCreationAttrs
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
  @HasMany(() => StationHistoryModel)
  history: StationHistoryModel[];
}
