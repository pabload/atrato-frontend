import useUser from "../../hooks/useUser"
import styles from "./addUserComponent.module.css"
const AddUserComponent = () => {
  const user = useUser()
  return (
    <div className={`${styles.mainContainer} animate__animated animate__fadeInRight tabComponent`}>
      <form onSubmit={(e)=>{user.addUser(e)}}>
        <h1>Crear nuevo usuario</h1>
        <div className={`grid lg:grid-cols-2 gap-4`}>
          <input value={user.email} onChange={(e)=>{user.setEmail(e.target.value)}} type="email" name="" id="" placeholder="correo" />
          <input value={user.telephone} onChange={(e)=>{user.setTelephone(parseInt(e.target.value))}} type="number" name="" id="" placeholder="telefono" />
          <input value={user.name} onChange={(e)=>{user.setName(e.target.value)}} type="text" name="" id="" placeholder="Nombre" />
          <input value={user.secondName} onChange={(e)=>{user.setSecondName(e.target.value)}} type="text" name="" id="" placeholder="Segundo Nombre" />
          <input value={user.surname} onChange={(e)=>{user.setSurname(e.target.value)}} type="text" name="" id="" placeholder="Apellido Paterno"/>
          <input value={user.secondSurname} onChange={(e)=>{user.setSecondSurname(e.target.value)}} type="text" name="" id="" placeholder="Apellido Materno"/> 
          <div className={`${styles.birthContainer} lg:col-span-2 `}>
            <label >Fecha de nacimiento</label>
            <div className={`${styles.birthContainerInfo}`}>
            <input value={user.day} onChange={(e)=>{user.setDay(e.target.value)}} type="number" name="" id="" placeholder="DD" />
            /
            <input value={user.month} onChange={(e)=>{user.setMonth(e.target.value)}} type="text" name="" id="" placeholder="MM" />
            /
            <input  value={user.year} onChange={(e)=>{user.setYear(e.target.value)}} type="number" name="" id="" placeholder="AA" />
            </div>
          </div>
          <select value={user.status} onChange={(e)=>{user.setStatus(e.target.value)}} className={``}>
            <option value="PENDIENTE">PENDIENTE</option>
            <option value="EN PROCESO">EN PROCESO</option>
            <option selected value="COMPLETADO">COMPLETADO</option>
          </select>
          <input value={user.assignedAnalyst} onChange={(e)=>{user.setassignedAnalyst(e.target.value)}} type="text" name="" id="" placeholder="Analista asignado" />
          <button className={`lg:col-span-2`}>Crear nuevo usuario</button>
        </div>
      </form>
    </div>
  )
}

export default AddUserComponent