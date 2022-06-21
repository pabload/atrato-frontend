import { useContext } from "react"
import { UserContext } from "../../contexts/usersContext"
import useHomePanel from "../../hooks/useHomePanel"
import CardComponent from "../cardComponent/cardComponent"
import styles from "./homeComponent.module.css"

const HomeComponent = () => {
  const { users ,getUsers } = useContext(UserContext);
  const { filter, setFilter, setTypeFilter, typeFilter, setFilterValue, filterValue,filterSearch} = useHomePanel(getUsers);
  return (
    <div className={`animate__animated animate__fadeInRight ${styles.mainContainer} tabComponent `}>
      <div className={`${styles.filterContainer}`}>
        <button className={`${styles.mainFilterButton}`} onClick={() => { setFilter(true) }}>Filtar busquedas</button>
        {
          filter ?
            <div className="">
              <h2>Filtar por:</h2>
              <div className="">
              <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value) }}>
                <option value="ID">Id del usuario</option>
                <option value="STATUS">Status del usuario</option>
                <option value="NAME">Nombre del Usario</option>
              </select>
              {
                typeFilter === "ID" || typeFilter === "NAME" ?
                  <input type="text" value={filterValue} onChange={(e) => { setFilterValue(e.target.value) }} />
                  : typeFilter == "STATUS" ?
                    <select value={filterValue} onChange={(e) => { setFilterValue(e.target.value) }}>
                      <option value="PENDIENTE">PENDIENTE</option>
                      <option value="EN PROCESO">EN PROCESO</option>
                      <option value="COMPLETADO">COMPLETADO</option>
                    </select>
                  :
                  null
              }
              <button onClick={()=>{filterSearch()}}>Filtrar</button>
              </div>
            </div>
            :
            null
        }
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        {
          users.map((user) => {
            return <CardComponent key={user.id} user={user} />
          })
        }
      </div>

    </div>
  )
}

export default HomeComponent