import React,{useState} from 'react'
import {useRecoilState} from 'recoil'
import {toggleSidebar} from '../../globalState/localData'
import icon1 from '../../Assets/naira.png'
import icon2 from '../../Assets/cryptoB.png'
import icon3 from '../../Assets/ep.png'
import icon4 from '../../Assets/t.png'
import icon5 from '../../Assets/ripple.png'
import icon6 from '../../Assets/Dash.png'
import logo from '../../Assets/logo.png'
export default function Sidebar(props) {
    let [sidebarState, setSidebarState] = useRecoilState(toggleSidebar)
    const [activeRoute, SetActiveRoute] = useState("naira")
    let CurrentRoute = props.CurrentRoute
    console.log(props)
    return (
        <div className={`responsiveSideBar ${sidebarState.openSidebar === true ?"responsiveSideBarOpen" : sidebarState.defaultSidebarApiState}`}>
        <div className="sidebar-wrap">
            
            <ul className="sidebar-list">
                <li className="sidebarLogo"><img src={logo} alt=""/></li>

             <li onClick={()=>props.BrowserRoter(`/q_coin_naira`)} className={CurrentRoute==="/q_coin_naira"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon1} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Naira</span>
                    {CurrentRoute==="/q_coin_naira"?<span className="sidbar-link-total">10000 <span>NGN</span></span> :""}
                    </span>  
                    </div>

                    {CurrentRoute==="/q_coin_naira"?<div className="active-dot-sidebar"></div> :""}
        
              </li>

              <li onClick={()=>props.BrowserRoter(`/q_coin_bitcoin`)} className={CurrentRoute==="/q_coin_bitcoin"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon2} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Bitcoin</span>
                    {CurrentRoute==="/q_coin_bitcoin"?<span className="sidbar-link-total">10000 <span>BTC</span></span> :""}
                    </span>  
                    </div>

                    {CurrentRoute==="/q_coin_bitcoin"?<div className="active-dot-sidebar"></div> :""}
        
              </li>


              <li onClick={()=>props.BrowserRoter("/q_coin_etheretum")} className={CurrentRoute==="/q_coin_etheretum"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon3} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Ethereum</span>
                    {CurrentRoute==="/q_coin_etheretum"?<span className="sidbar-link-total">10000 <span>ETH</span></span> :""}
                    </span>  
                    </div>
                    
                    {CurrentRoute==="/q_coin_etheretum"?<div className="active-dot-sidebar"></div> :""}
        
              </li>


              <li onClick={()=>props.BrowserRoter("/q_coin_tether")} className={CurrentRoute==="/q_coin_tether"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon4} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Tether</span>
                    {CurrentRoute==="/q_coin_tether"?<span className="sidbar-link-total">10000 <span>USDT </span></span> :""}
                    </span>  
                    </div>

                    {CurrentRoute==="/q_coin_tether"?<div className="active-dot-sidebar"></div> :""}
        
              </li>


              <li onClick={()=>props.BrowserRoter("/q_coin_ripple")} className={CurrentRoute==="/q_coin_ripple"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon5} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Ripple</span>
                    {CurrentRoute==="/q_coin_ripple"?<span className="sidbar-link-total">10000 <span>XRP</span></span> :""}
                    </span>  
                    </div>

                    {CurrentRoute==="/q_coin_ripple"?<div className="active-dot-sidebar"></div> :""}
        
              </li>



              <li onClick={()=>props.BrowserRoter("/q_coin_dash")} className={CurrentRoute==="/q_coin_dash"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon6} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Dash</span>
                    {CurrentRoute==="/q_coin_dash"?<span className="sidbar-link-total">10000 <span>DASH</span></span> :""}
                    </span>  
                    </div>

                    {CurrentRoute==="/q_coin_dash"?<div className="active-dot-sidebar"></div> :""}
        
              </li>

             

            </ul>
        </div>
        </div>
    )
}
