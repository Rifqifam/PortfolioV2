import React from 'react'
import { useState , useRef } from 'react';
import { BiMenuAltRight } from "react-icons/bi";

const nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navMobileOpen = useRef(null);
  const navMobileItem1Open = useRef(null);
  const navMobileItem2Open = useRef(null);
  const navMobileItem3Open = useRef(null);
  
  const openNav = () => {
      setTimeout(() => {
        navMobileOpen.current.classList.toggle("nav_mobile_menu_close");
      }, 500); 

      setTimeout(() => {
        navMobileItem1Open.current.classList.toggle("nav_mobile_menu_itemopen");
      }, 700); 

      setTimeout(() => {
        navMobileItem2Open.current.classList.toggle("nav_mobile_menu_itemopen");
      }, 900); 

      setTimeout(() => {
        navMobileItem3Open.current.classList.toggle("nav_mobile_menu_itemopen");
      }, 1100); 

      setIsOpen(!isOpen);


    }

  function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

  return (
    <div className="nav">
      <div className='nav_desktop'>
        <ul>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className='nav_mobile'>
        <div className='nav_mobile_ham'>
          <button className='nav_mobile_ham-btn' onClick={openNav}>
            <BiMenuAltRight className={isOpen ? 'menu-open' : 'menu-close'} />
          </button>
        </div>
        <div className='nav_mobile_menu nav_mobile_menu_close' ref={navMobileOpen}>
          <ul>
            <li className='nav_mobile_menu_item' ref={navMobileItem1Open}><a href="/experience">Experience</a></li>
            <li className='nav_mobile_menu_item' ref={navMobileItem2Open}><a href="/profile">Profile</a></li>
            <li className='nav_mobile_menu_item' ref={navMobileItem3Open}><a href="/contact">Contact</a></li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default nav