import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars } from 'react-icons/fa6';


const Navbar = () => {

  const [menu, setmenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div id='home' className='navbar'>
      <FaBars onClick={openMenu} className='nav-open' />
      <ul ref={menuRef} className='nav-menu'>
        <FaBars onClick={closeMenu} className='nav-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setmenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setmenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p onClick={() => setmenu("skill")}>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() => setmenu("project")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setmenu("contact")}>Contact</p></AnchorLink></li>

      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setmenu("contact")}>Connect With Me </p></AnchorLink>
      </div>
    </div>
  )
}

export default Navbar