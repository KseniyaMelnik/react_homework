import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString('ru-RU')
    const stringDate = date?.toLocaleDateString('ru-RU')


    let hours = date? date.getHours() : 0
    const hoursForClock =  hours >= 13 ? hours % 12 : hours
    const minutes = date ? date.getMinutes() : 0
    const seconds = date ? date.getSeconds() : 0


    // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num: any, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    const hourElStyle = {transform: `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`}
    const minuteElStyle = {transform: `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`}
    const secondElStyle = {transform: `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`}


    return (
        <div className={s.wrapper}>
                <div className={s.clock}>
                    <div style={hourElStyle} className={`${s.needle} ${s.hour}`}></div>
                    <div style={minuteElStyle} className={`${s.needle} ${s.minute}`}></div>
                    <div style={secondElStyle} className={`${s.needle} ${s.second}`}></div>
                    <div className={s.centerPoint}></div>
                </div>
                <div className={s.dataContainer}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}


export default Clock
