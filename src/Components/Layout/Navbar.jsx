import React from 'react'
import {useRecoilState} from 'recoil'
import {toggleSidebar} from '../../globalState/localData'
import Avatar from '../../Assets/avatar.png'
export default function Navbar({BrowserRoter}) {
    let [sidebarState, setSidebarState] = useRecoilState(toggleSidebar)
    return (
    <div className="navbar-position">
         <div className="navbar-wrap">
             <div className="navbar-pad">

                 <div className="account-bal-nav">
                     <span>BTC / NGN 7,344,546.89</span>
                 </div>

                 <div className="nav-actions">
                        <span onClick={()=>setSidebarState({...sidebarState,openSidebar:!sidebarState.openSidebar,defaultSidebarApiState:"apiDocsCloseSidebar"})}>
                        Wallets
                        </span>
                        <span>
                        Buy/Sell
                        </span>
                       <img onClick={()=>BrowserRoter(`/my_account`)} className="avatarIcaon-nav" src={Avatar} />
                 </div>

             </div>
            
        </div>
  </div>
       
    )
}
