import styles from "./sideMenuComponent.module.css"
import ColorLogo from "../../assets/ColorLogo.png"
import { AiFillHome,AiOutlineUserAdd,AiOutlineAreaChart } from "react-icons/ai";
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { UserContext } from "../../contexts/usersContext";
import useSideMenu from "../../hooks/useSideMenu";
const SideMenuComponent = () => {
  const {setcurrentPanel,backgroundColor,currentPanel} = useContext(MenuContext)
  const {getUsers} = useContext(UserContext);
  const {handleMenu} = useSideMenu(getUsers,setcurrentPanel)
  return (
    <div className={`${styles.mainContainer} `}>
        <div  className={`${styles.headerContainer}`}>
           <img src={ColorLogo} alt="logo" />
        </div>
        <div className={`${styles.menuContainer}`}>
            <button style={{backgroundColor:currentPanel==="HOME"?backgroundColor:"transparent"}} onClick={()=>{handleMenu("HOME")}}><AiFillHome color="#FD8E35"/>Inicio</button>
            <button style={{backgroundColor:currentPanel==="ADD-USER"?backgroundColor:"transparent"}} onClick={()=>{handleMenu("ADD-USER")}}><AiOutlineUserAdd color="#FD8E35"/>Crear usuario</button>
        </div>
    </div>
  )
}

export default SideMenuComponent