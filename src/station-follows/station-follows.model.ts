import {Column, DataType, Model, Table} from "sequelize-typescript";

interface StationFollowsModelCreationAttrs{
    country:string,
    city: string,
    latitude?:number,
    longitude?:number
}
@Table({ tableName: "station-follows" })
export class StationFollowsModel extends Model<StationFollowsModel,StationFollowsModelCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;
    @Column({ type: DataType.STRING, allowNull: true })
    country:string
    @Column({ type: DataType.STRING, allowNull: true })
    city:string
    @Column({ type: DataType.INTEGER, allowNull: true })
    latitude:number
    @Column({ type: DataType.INTEGER, allowNull: true })
    longitude:number
}