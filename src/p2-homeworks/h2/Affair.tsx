import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (affairId: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <div className = {s.affair}>
                <div className={s.affair_container}>
                    <div className={s.name}>{props.affair.name}</div>
                    <div className={s.priority}>{props.affair.priority}</div>
                </div>
                <button className={s.deleteBtn} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
