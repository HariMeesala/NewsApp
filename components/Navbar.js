import React, { useState } from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'

export default function Navbar() {

const [sideIcon, setSideIcon] = useState(false);

const showSidebar = () => {
  setSideIcon(true);
}

const hideSidebar = () => {
  setSideIcon(false);
}

  return (
    <div className='nav-bar'>
        <div className='logo'>
        </div>
        <div className='nav-items'>
            <div className='item' ><Link to="/everything" className='links' >All</Link></div>
            <div className='item'><Link to="/sports" className='links' >Sports</Link></div>
            <div className='item'><Link to="/entertainment" className='links' >Entertainment</Link></div>
            <div className='item'><Link to="/health" className='links' >Health</Link></div>
            <div className='item'><Link to="/politics" className='links' >Politics</Link></div>
            <div className='item'><Link to="/technology" className='links' >Technology</Link></div>
            <div className='item'><Link to="/business" className='links' >Business</Link></div>
        </div>
        <div className={ sideIcon ? 'sidebar responsive' : 'sidebar' }>
            <div className='item' style={{width: '40px', height: '40px', cursor: 'pointer'}} onClick={hideSidebar} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div className='item' ><Link to="/everything" className='links' >All</Link></div>
            <div className='item'><Link to="/sports" className='links' >Sports</Link></div>
            <div className='item'><Link to="/entertainment" className='links' >Entertainment</Link></div>
            <div className='item'><Link to="/health" className='links' >Health</Link></div>
            <div className='item'><Link to="/politics" className='links' >Politics</Link></div>
            <div className='item'><Link to="/technology" className='links' >Technology</Link></div>
            <div className='item'><Link to="/business" className='links' >Business</Link></div>
        </div>
        <div className={ sideIcon ? 'mobile-icon responsive' : 'mobile-icon' } onClick={showSidebar} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        
    </div>
  )
}
