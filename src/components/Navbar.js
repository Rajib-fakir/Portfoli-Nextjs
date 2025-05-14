// components/Navbar.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(prev => !prev); // স্টেট আপডেট শুধু এখানেই
};

useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
}, [isOpen]);
  
  
  
  
  const routeClick=()=>{
    
    
  }
  
  
  
  
  

  return (
    <>
      <nav className="navbar p-0 m-0 ">
        <div className="container p-1 m-0 w-100">
          <Link href="/" >
                 <Image
                  src="/images/favicon.ico"
                  alt="logo"
                  className="logo"
                  width={30}
                  height={30}
                />
          
          </Link>
          <button className="toggle  " onClick={toggleMenu}>
            &#9776;
          </button>
          <div className={`menu  ${isOpen ? 'show' : ''}`}>
       <div className="font-40 text-left  w-100  d-md-none closeIcon">
       
       <i className="bi bi-x-octagon text-danger" onClick={toggleMenu}></i>
       </div>   
          
          
            <Link className="Link" href="/" ><span className="link" onClick={toggleMenu}>Home</span></Link>
            <Link className="Link" href="/about" ><span className="link" onClick={toggleMenu}>About</span></Link>
            <Link className="Link" href="/services" ><span className="link" onClick={toggleMenu}>Services</span></Link>
            <Link className="Link" href="/contact" ><span className="link" onClick={toggleMenu}>Contact</span></Link>
            <Link className="Link" href="/ai" ><span className="link" onClick={toggleMenu}>AI Chat</span></Link>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}