import React from 'react';
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.container}>
            <div className={s.avatar}>
                <img src={props.avatar} alt={'avatar'}/>
            </div>
            <div className={s.textContainer}>
                <div className={s.name}>{props.name}</div>
                <div className={s.textContent}>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>
                        <span>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
