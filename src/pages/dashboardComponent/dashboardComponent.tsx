import { useContext } from "react"
import AddUserComponent from "../../components/addUserComponent/addUserComponent"
import AnalyticsComponent from "../../components/analyticsComponent/analyticsComponent"
import HomeComponent from "../../components/homeComponent/homeComponent"
import LoaderComponent from "../../components/loaderComponent/loaderComponent"
import SideMenuComponent from "../../components/sideMenuComponent/sideMenuComponent"
import { MenuContext } from "../../contexts/menuContext"
import { UserContext } from "../../contexts/usersContext"
import styles from "./dashboardComponent.module.css"
const DashboardComponent = () => {
  const {currentPanel} = useContext(MenuContext);
  const {loading} = useContext(UserContext);
  console.log(currentPanel)
  return (
    <div className={`${styles.mainContainer}`}>
        <SideMenuComponent/>
        { 
          loading?
          <LoaderComponent message="Cargando Usuarios" />:
          currentPanel==="HOME"?
          <HomeComponent/>:
          currentPanel==="ADD-USER"?
          <AddUserComponent/>:
          <AnalyticsComponent/>
        }
        
    </div>
  )
}

export default DashboardComponent