import styles from "./cardComponent.module.css"
import { FaUserAlt } from "react-icons/fa";
import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";
import { IUserInterface } from "../../interfaces/userInterface";
import useUser from "../../hooks/useUser";
import { Button, Modal } from "react-bootstrap";
interface ICardComponent {
    user: IUserInterface,
}
const CardComponent = (props: ICardComponent) => {
    const user = useUser(
        props.user.email,
        props.user.telephone,
        props.user.name,
        props.user.second_name,
        props.user.surname,
        props.user.second_surname,
        props.user.birth.split("/")[0],
        props.user.birth.split("/")[1],
        props.user.birth.split("/")[2],
        props.user.status,
        props.user.assigned_analyst
    );
    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.headerContainer}`}>
                <div className={`${styles.titleContainer}`}>
                    <FaUserAlt />
                    <div className={`${styles.nameContainer}`}>
                        {
                            !user.editing ?
                                <h1>{props.user.name} {props.user.second_name} {props.user.surname} {props.user.second_surname}</h1>
                                :
                                <div className={`${styles.nameInputContainer}`}>
                                    <input value={user.name} onChange={(e) => { user.setName(e.target.value) }} type="text" name="" id="" placeholder="Nombre" />
                                    <input value={user.secondName} onChange={(e) => { user.setSecondName(e.target.value) }} type="text" name="" id="" placeholder="Segundo Nombre" />
                                    <input value={user.surname} onChange={(e) => { user.setSurname(e.target.value) }} type="text" name="" id="" placeholder="Apellido Paterno" />
                                    <input value={user.secondSurname} onChange={(e) => { user.setSecondSurname(e.target.value) }} type="email" name="" id="" placeholder="Apellido Materno" />

                                </div>
                        }
                        <span>ID:{props.user.id}</span>
                    </div>
                </div>
                <div className={`${styles.statusContainer}`}>
                    <select disabled={!user.editing} onChange={(e)=>user.setStatus(e.target.value)}>
                        <option selected={user.status === "PENDIENTE"} value="PENDIENTE">PENDIENTE</option>
                        <option selected={user.status === "EN PROCESO"} value="EN PROCESO">EN PROCESO</option>
                        <option selected={user.status === "COMPLETADO"} value="COMPLETADO">COMPLETADO</option>
                    </select>
                </div>
            </div>
            <div className={`${styles.infoContainer}`}>
                <div className={`${styles.userInfoContainer}`}>
                    <label>MAIL</label>
                    {
                        !user.editing ?
                            <h3>{props.user.email}</h3>
                            :
                            <input value={user.email} onChange={(e) => { user.setEmail(e.target.value) }} type="email" name="" id="" placeholder="Correo" />
                    }
                    <label>FECHA DE NACIMIENTO</label>
                    {
                        !user.editing ?
                            <h3>{props.user.birth}</h3> :
                            <div className={`${styles.birthInputContainer}`}>
                                <input value={user.day} onChange={(e) => { user.setDay(e.target.value) }} type="number" name="" id="" placeholder="Dia" />/
                                <input value={user.month} onChange={(e) => { user.setMonth(e.target.value) }} type="text" name="" id="" placeholder="Mes" />/
                                <input value={user.year} onChange={(e) => { user.setYear(e.target.value) }} type="email" name="" id="" placeholder="Año" />
                            </div>
                    }
                    <label>TELÉFONO</label>
                    {
                        !user.editing ?
                            <h3>{props.user.telephone}</h3> :
                            <input value={user.telephone} onChange={(e) => { user.setTelephone(parseInt(e.target.value)) }} type="number" name="" id="" placeholder="Telefono" />

                    }
                    <label>ANALISTA ASIGNADO</label>
                    {
                        !user.editing ?
                            <h3>{props.user.assigned_analyst}</h3> :
                            <input value={user.assignedAnalyst} onChange={(e) => { user.setassignedAnalyst(e.target.value) }} type="text" name="" id="" placeholder="Analista Asignado" />
                    }
                </div>
                <div className={`${styles.cardInfoContainer}`}>
                    <label>FULL NAME</label>
                    <h3>{user.name} {user.secondName} {user.surname} {user.secondSurname}</h3>
                    <label>CARD NUMBER</label>
                    <h3>{props.user.card_info.card_number}</h3>
                    <div className={`${styles.sensiveCardInfoContainer}`}>
                        <div className={`${styles.sensiveInfoContainer}`}>
                            <label>CVV</label>
                            <h3>{props.user.card_info.cvv}</h3>
                        </div>
                        <div className={`${styles.sensiveInfoContainer}`}>
                            <label>PIN</label>
                            <h3>{props.user.card_info.pin}</h3>
                        </div>
                        <div className={`${styles.sensiveInfoContainer}`}>
                            <label>EXP</label>
                            <h3>{props.user.card_info.date.slice(0, 7).replace("-", "/")}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.editButtonContainer}`}>
                <button onClick={() => { user.editing ? user.UpdateUser(props.user.id.toString()) : user.setEditing(true) }}> {
                    user.editing ?
                        "CONFIRMAR"
                        :
                        "EDITAR"
                } <MdModeEditOutline /></button>
                {
                    user.editing ?
                        <button onClick={() => { user.setEditing(false) }}>CANCELAR</button>
                        :
                        null

                }
                <button onClick={()=>user.setModalShow(true)}>ELIMINAR<MdDeleteForever /></button>
            </div>




            <>
                <Modal show={user.modalshow} onHide={()=>user.setModalShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Estas seguro de eliminar este usuario?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{user.setModalShow(false)}}>
                            No, cancelar
                        </Button>
                        <Button variant="primary" onClick={()=>user.DeleteUser(props.user.id.toString())}>
                            Si
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default CardComponent