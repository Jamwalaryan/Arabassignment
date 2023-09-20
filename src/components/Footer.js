import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { TiCloudStorageOutline } from 'react-icons/ti'
import { AiOutlineMail } from 'react-icons/ai'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-column'>
                <h2>Free Starter</h2>
                <span>The Quickest and easiest way to try Protocols with Basic functionalities</span>
                <br/><br/>
                <button className='btn-1'>Get started</button>
            </div>
            <div className='footer-column'>
                <h4>What you'll get</h4>
                <CgProfile className='icons-1' />
                <span>upto 25 Users</span>
                <br />
                <TiCloudStorageOutline className='icons-1' />
                <span>Upto 25gb Storage</span>
                <br />
                <AiOutlineMail className='icons-1' />
                <span>Email Support</span>
            </div>
            <div className='footer-column'>
                <button className='btn-1'>Lets Connect</button>
                <h1>ENTERPRISES PLAN</h1>
                <span>The Quickest and easiest way to try Protocols with Basic functionalities</span>
                <br/><br/>
                 <button className='btn-1'>Contact Us</button>
            </div>

        </footer>
    )
}

export default Footer