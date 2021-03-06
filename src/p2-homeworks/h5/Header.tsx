import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import icon from './assets/Cat-Clean-32.png'

function Header() {
    return (
       <div className={s.container}>
           <img src={icon} alt={icon} />
           <div className={s.navbar}>
               <NavLink to={'/pre-junior'} className={({isActive}) =>(isActive ? s.active : s.link)}>PreJunior</NavLink>
               <NavLink to={'/junior'} className={({isActive}) =>(isActive ? s.active : s.link)}>Junior</NavLink>
               <NavLink to={'/junior-plus'} className={({isActive}) =>(isActive ? s.active : s.link)}>JuniorPlus</NavLink>
           </div>
       </div>
    )
}

export default Header
