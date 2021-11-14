import React from 'react'
import Header from './Header'
import NewRoutes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
            <Header/>
            <NewRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
