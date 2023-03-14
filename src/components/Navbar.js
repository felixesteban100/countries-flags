import React from 'react'
// import '../App.css'

function Navbar({getBack, theme, changeTheme}) {
  const navLogo = theme === "light" ?
  "https://cdn-icons-png.flaticon.com/512/869/869869.png"
    :
  "https://cdn-icons-png.flaticon.com/512/1823/1823324.png"

  // const otherTheme = props.theme === "light" ? "Dark" : "Light"
  
  return (
    <div 
      className={` 
        ${theme === "light" ? "bg-gray-400 text-black" : "bg-gray-900 text-white"} 
        flex justify-between gap-10 
        p-5 lg:pl-[10vw] md:pl-[10vw] xl:pl-[15vw] lg:pr-[10vw] md:pr-[10vw] xl:pr-[15vw]
      `}
    >
        <div 
          onClick={() => getBack()}
          className={`flex justify-center align-middle gap-2 cursor-pointer`}
        >
          <img className='h-10 self-center' src="https://cdn-icons-png.flaticon.com/512/4830/4830735.png" alt="" />
          <p className='self-center text-2xl'>Where in the world?</p>
        </div>
        <div className='cursor-pointer focus:outline-none' onClick={changeTheme} >
            <img className='h-10 self-center' src={navLogo} alt="logo" /> 
        </div>
    </div>
  )
}

export default Navbar