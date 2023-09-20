import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import {FaHome}  from 'react-icons/fa'
import {MdSpaceDashboard} from 'react-icons/md'
import {FcFaq} from 'react-icons/fc'
import {MdSupervisorAccount} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {AiOutlineLogout} from 'react-icons/ai'
import Dashboard from '../Pages/Dashboard'


function Sidebar() {
   
  return (
    <div className='bar'>
    <div className='sidebar'>
        <div className='profile'>
      <img src='https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg' className='img' alt=''/>
      <h3>Aryan Jamwal</h3>
      <p>aryan29@gmail.com</p>
     </div>
     <aside className='sidebar-1'>
        <nav className='nav-1'>
            <div className='aryan'>
            <Link to="/" className='nav-logo'>
                <FaHome className='icon'/>
                <span className='text'>Home</span>
            </Link>
            <Link to="/dashboard" className='nav-logo'>
                <MdSpaceDashboard className='icon'/>
                <span className='text'>Dashboard</span>
            </Link>
            <Link to="/faq" className='nav-logo'>
                <FcFaq className='icon'/>
                <span className='text'>FAQ</span>
            </Link>
            <Link to="/perk" className='nav-logo'>
                <MdSupervisorAccount className='icon'/>
                <span className='text'>Perks</span>
            </Link>
            <Link to="/support" className='nav-logo'>
                <BiSupport className='icon'/>
                <span className='text'>Support</span>
            </Link>
            </div>
        </nav>
        <Link to="/logout" className='nav-logo'>
                <AiOutlineLogout className='icon'/>
                <span className='text'>Log Out</span>
            </Link>
     </aside>

    
    </div>
    <Dashboard/>
    </div>
  )
}

export default Sidebar