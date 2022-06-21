import axios from "axios"
import { IUserInterface } from "../interfaces/userInterface";
const URL = "http://localhost:4000/users/"
export const getAllUser = async (): Promise<Array<IUserInterface>> => {
    const res = await axios.get(URL);
    const resJson: Array<IUserInterface> = res.data;
    return resJson;
}
export const getStatusUsers = async (status:String): Promise<Array<IUserInterface>> => {
    const res = await axios.get(`${URL}status/${status}`);
    const resJson: Array<IUserInterface> = res.data;
    return resJson;
}
export const getNamesUsers = async (name:String): Promise<Array<IUserInterface>> => {
    const res = await axios.get(`${URL}name/${name}`);
    const resJson: Array<IUserInterface> = res.data;
    return resJson;
}
export const getIdUsers = async (id:String): Promise<Array<IUserInterface>> => {
    const res = await axios.get(`${URL}id/${id}`);
    const resJson: Array<IUserInterface> = res.data;
    console.log(resJson);
    return resJson;
}
export const addUser = async (email: string,
    telephone: number,
    name: string,
    second_name: string,
    surname: string,
    second_surname: string,
    birth: string,
    status: string,
    assigned_analyst: string) => {
    const body = {
      email,
      telephone,
      name,
      second_name,
      surname,
      second_surname,
      birth,
      status,
      assigned_analyst
    }
    const res = await axios.post(URL, body);
    return res.data;
}

export const UpdateUser = async (
    id:string,
    email: string,
    telephone: number,
    name: string,
    second_name: string,
    surname: string,
    second_surname: string,
    birth: string,
    status: string,
    assigned_analyst: string) => {
    const body = {
      email,
      telephone,
      name,
      second_name,
      surname,
      second_surname,
      birth,
      status,
      assigned_analyst
    }
    const res = await axios.put(`${URL}${id}`, body);
    return res.data;
}

export const deleteUser = async (id:string) => {
    const res = await axios.delete(`${URL}${id}`);
    return res.data;
}


