import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior-plus";
import Error404 from "./pages/Error404";
import * as path from "path";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function NewRoutes() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate replace to={PATH.PRE_JUNIOR}/>}/>
                <Route  path={PATH.PRE_JUNIOR}  element={<PreJunior/>}> </Route>
                <Route  path={PATH.JUNIOR}  element={<Junior/>}> </Route>
                <Route  path={PATH.JUNIOR_PLUS}  element={<JuniorPlus/>}> </Route>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default NewRoutes
