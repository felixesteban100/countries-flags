import React from 'react'
import '../App.css'

function Navbar(props) {
  const navLogo = props.theme === "light" ?
  "https://cdn-icons-png.flaticon.com/512/702/702471.png"
    :
  "https://cdn-icons-png.flaticon.com/512/581/581601.png"
  
  return (
    <div>
        <div className='navbar'>
            <h2 className='title'>Where in the world?</h2>
            <div onClick={props.changeTheme} className='dark-mode-button'>
                <h3><img src={navLogo} alt="" className='nav-logo'/> Dark Mode</h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar