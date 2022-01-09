import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestsAPI} from "./RequestsAPI";
import s from "./HW13.module.css"

function Request() {

    const [checked, setChecked] = useState(true)
    const [message, setMessage] = useState("")


    const onClick = () => {
        requestsAPI.postRequest(checked)
            .then((res) => {
                setMessage(res.data.errorText);
                setChecked(false);
            })
            .catch((error) => {
                    setMessage(error.response ? error.response.data.errorText : error.message)
                }
            )
    }


    return <div className={s.container}>
        <SuperCheckbox checked={checked} onChange={() => {
            setChecked(!checked)
        }}/>
        <span>{message}</span>
        <SuperButton onClick={onClick}>Request</SuperButton>
    </div>

}

export default Request;
