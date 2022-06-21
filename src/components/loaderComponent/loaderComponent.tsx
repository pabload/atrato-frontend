import { Circles } from "react-loader-spinner"
import styles from "./loaderComponent.module.css"
interface ILoaderComponent{
  message:string
}
const LoaderComponent = ({message}:ILoaderComponent) => {
  return (
    <div className={`tabComponent ${styles.mainContainer}`}>
        <Circles color="#FD8E35" height={100} width={100}/>
        <h1>{message}</h1>
    </div>
  )
}

export default LoaderComponent