import { ICardInterface } from "./cardInterface"

export  interface IUserInterface{
    id:number,
    email:string,
    telephone:number,
    name:string,
    second_name:string,
    surname:string,
    second_surname:string,
    birth:string,
    status:string,
    assigned_analyst:string
    card_info:ICardInterface
}