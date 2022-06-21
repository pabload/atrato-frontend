import { useContext, useState } from "react"
import toast from "react-hot-toast";
import { MenuContext } from "../contexts/menuContext";
import { UserContext } from "../contexts/usersContext";
import * as apiService from "../service/indexApiService"
const useUser = (
  editingEmail?:string,
  editingTelephone?:number,
  editingName?:string,
  editingSecondName?:string,
  editingSurname?:string,
  editingSecondSurname?:string,
  editingDay?:string,
  editingMonth?:string,
  editingYear?:string,
  editingStatus?:string,
  editingAssignedAnalyst?:string,
) => {
  const [modalshow, setModalShow] = useState(false);
  const {getUsers} = useContext(UserContext);
  const {setcurrentPanel} = useContext(MenuContext)
  const [editing, setEditing] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(editingEmail?editingEmail:"");
  const [telephone, setTelephone] = useState<number>(editingTelephone?editingTelephone:0);
  const [name, setName] = useState<string>(editingName?editingName:"");
  const [secondName, setSecondName] = useState<string>(editingSecondName?editingSecondName:"");
  const [surname, setSurname] = useState<string>(editingSurname?editingSurname:"");
  const [secondSurname, setSecondSurname] = useState<string>(editingSecondSurname?editingSecondSurname:"");
  const [day, setDay] = useState<string>(editingDay?editingDay:"");
  const [month, setMonth] = useState<string>(editingMonth?editingMonth:"");
  const [year, setYear] = useState<string>(editingYear?editingYear:"");
  const [status, setStatus] = useState<string>(editingStatus?editingStatus:"");
  const [assignedAnalyst, setassignedAnalyst] = useState<string>(editingAssignedAnalyst?editingAssignedAnalyst:"")
  const addUser= async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const birth=`${day}/${month}/${year}`
    const res = await apiService.addUser(email,telephone,name,secondName,surname,secondSurname,birth,status,assignedAnalyst)
    await getUsers("ALL","")
    setcurrentPanel("HOME")
    toast.success('Nuevo usuario registrado')
  }
  const UpdateUser= async (id:string)=>{
    const birth=`${day}/${month}/${year}`
    const res = await apiService.UpdateUser(id,email,telephone,name,secondName,surname,secondSurname,birth,status,assignedAnalyst)
    await getUsers("ALL","")
    toast.success('Cambio realizado')
    setEditing(false);
  }
  const DeleteUser=async(id:string)=>{
    const res = await apiService.deleteUser(id)
    await getUsers("ALL","")
    setModalShow(false);
    toast.success('Usuario Eliminado')
  }
  return (
    {
      email,
      setEmail,
      telephone,
      setTelephone,
      name,
      setName,
      secondName,
      setSecondName,
      surname,
      setSurname,
      secondSurname,
      setSecondSurname,
      day,
      setDay,
      month,
      setMonth,
      year,
      setYear,
      status,
      setStatus,
      assignedAnalyst,
      setassignedAnalyst,
      addUser,
      UpdateUser,
      DeleteUser,
      editing,
      setEditing,
      modalshow,
      setModalShow
    }
  )
}

export default useUser