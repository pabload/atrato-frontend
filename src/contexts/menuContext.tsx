import { useEffect, useState, createContext } from 'react';
interface IMenuContext{
    currentPanel:string,
    backgroundColor:string,
    setcurrentPanel:Function

}
const initialValue: IMenuContext = {
    currentPanel:"HOME",
    backgroundColor:"#E3E5E9",
    setcurrentPanel:()=>{}
}
export const MenuContext = createContext<IMenuContext>(initialValue);
const MenuContextProvider = ({ children }: any): JSX.Element => {
    const backgroundColor="#E3E5E9";
    const [currentPanel, setcurrentPanel] = useState<string>("HOME")
    useEffect(() => {
    }, [])
    return (
        <MenuContext.Provider value={{currentPanel,setcurrentPanel,backgroundColor}} >
            {children}
        </MenuContext.Provider>
    );
}

export default MenuContextProvider