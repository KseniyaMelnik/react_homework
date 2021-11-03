import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void
    addUser: ()=> void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (name.length !== 0)? s.default : s.error // need to fix with (?:)

    return (
        <div className={s.addUserContainer}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.btn} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.textError}>{error}</span>
        </div>
    )
}

export default Greeting
