export class AddStationDto{
    readonly country:string
    readonly city:string
    readonly latitude?:number
    readonly longitude?:number
    readonly date?:Date
    readonly aqi?:number
    readonly stationId?:number
}