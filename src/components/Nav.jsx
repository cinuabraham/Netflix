import React, { useEffect, useState } from 'react'
import'./Nav.css'
function Nav() {

  const [show,setShow] = useState(false)

  useEffect(()=>{

    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)
      }
      else {
        setShow(false)
      }
    })
  }

  )
  return (
    <div className={`${show && 'nav-bg'} nav`}>
      <img width={'150px'} src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="no image" />
    </div>
  )
}

export default Nav