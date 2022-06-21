import { useEffect, useState } from "react"
import toast from "react-hot-toast";
const useHomePanel = (getUser: Function) => {
    const [filter, setFilter] = useState<boolean>(false);
    const [typeFilter, setTypeFilter] = useState<string>("ID");
    const [filterValue, setFilterValue] = useState<string>("");
    const filterSearch = async () => {
        await getUser(typeFilter,filterValue);
        toast.success('Usuarios filtrados');
        console.log("hola");
    }
    useEffect(() => {
      if(typeFilter!=="STATUS"){
        return setFilterValue("")
      }
       return setFilterValue("PENDIENTE")
    }, [typeFilter])
    
    return (
        {
            filter,
            setFilter,
            typeFilter,
            setTypeFilter,
            filterValue,
            setFilterValue,
            filterSearch
        }
    )
}

export default useHomePanel