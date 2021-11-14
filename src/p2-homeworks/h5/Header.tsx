import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
       <div className={s.container}>
           <div className={s.hoveredElement}> </div>
           <div className={s.navbar}>
               <NavLink to={'/pre-junior'} className={({isActive}) =>(isActive ? s.active : s.link)}>PreJunior</NavLink>
               <NavLink to={'/junior'} className={({isActive}) =>(isActive ? s.active : s.link)}>Junior</NavLink>
               <NavLink to={'/junior-plus'} className={({isActive}) =>(isActive ? s.active : s.link)}>JuniorPlus</NavLink>
           </div>
       </div>
    )
}
/*className={({ isActive }) =>(isActive ? " active" : "")}
className={isActive => (!isActive? s.unselected : s.link)}*/

export default Header
