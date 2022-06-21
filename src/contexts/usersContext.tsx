import { useEffect, useState, createContext } from 'react';
import { IUserInterface } from '../interfaces/userInterface';
import * as apiService from "../service/indexApiService"
interface IUsersContext {
    users: Array<IUserInterface>,
    loading:boolean,
    getUsers: Function,
    setUsers:Function,
}
const initialValue: IUsersContext = {
    users: [],
    loading:false,
    getUsers: () => { },
    setUsers:() => { },
}
export const UserContext = createContext<IUsersContext>(initialValue);
const UserContextProvider = ({ children }: any): JSX.Element => {
    const [users, setUsers] = useState<Array<IUserInterface>>(initialValue.users);
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            const res = await apiService.getAllUser();
            setUsers(res);
            setLoading(false)
        }
        loadUsers()
    }, [])
    const getUsers = async (type: string, filter: string) => {
        console.log("entro");
        let res;
        switch (type) {
            case 'ALL':
                res = await apiService.getAllUser();
                setUsers(res);
                break;
            case 'STATUS':
                res = await apiService.getStatusUsers(filter);
                setUsers(res);
                break;
            case 'NAME':
                res = await apiService.getNamesUsers(filter);
                setUsers(res);
                break;
            case 'ID':
                res = await apiService.getIdUsers(filter);
                setUsers(res);
                break;
        }
    }
    return (
        <UserContext.Provider value={{ getUsers, users,loading , setUsers }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider