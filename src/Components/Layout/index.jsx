import React, { useState, useEffect } from 'react'
import {useRecoilState} from 'recoil'
import {toggleSidebar} from '../../globalState/localData'
import Avatar from '../../Assets/avatar.png'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './layout.css'
export default function Index(props) {
    let [sidebarState, setSidebarState] = useRecoilState(toggleSidebar)
    const [LastScrool, setLastScrool] = useState(0)
    const [ticking, setticking] = useState(false)
    const [Hidenav, setHideNav] = useState(false)
    useEffect(() => {


    }, [Hidenav])



    return (
        <React.Fragment>
            <div>
                <div id="hideNav">
                    <Navbar BrowserRoter={props.BrowserRoter} />
                </div>


                <Sidebar BrowserRoter={props.BrowserRoter} CurrentRoute={props.CurrentRoute} />
                <div className="backgroundImage-wrap">

                </div>
                <div>
                    <section onClick={()=>setSidebarState({...sidebarState, openSidebar:false})}  className="app-container">
                        {props.children}
                    </section>




                </div>
            </div>

        </React.Fragment>
    )
}
