import React from 'react'
import './Dashboard.css'
import { CgProfile } from 'react-icons/cg'
import { TiCloudStorageOutline } from 'react-icons/ti'
import { AiOutlineMail } from 'react-icons/ai'
import Footer from '../components/Footer'


function Dashboard() {
    return (
        <div className='gradient'>
            <h1>CHOOSE A PLAN THAT'S JUST RIGHT FOR YOU.</h1>

            <div className='shree'>
                <div className='card'>
                    <h1 className='card-1'>Basic</h1>

                    <p className='price'>$9.99/mo</p>
                    <br></br><br></br>
                    <button className='btn'>Get Started</button>
                    <hr></hr>
                    <div className='para'>
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






                </div>
                <div className='card'>
                    <h1 className='card-1'>Standard</h1>

                    <p className='price'>$99.99/mo</p>
                    <br></br><br></br>
                    <button className='btn'>Get Started</button>
                    <hr></hr>
                    <div className='para'>
                        <h4>What you'll get</h4>
                        <CgProfile className='icons-1' />
                        <span>Upto 50 Users</span>
                        <br />
                        <TiCloudStorageOutline className='icons-1' />
                        <span>Upto 50gb Storage</span>
                        <br />
                        <AiOutlineMail className='icons-1' />
                        <span>Email Support</span>

                    </div>






                </div>
                <div className='card'>
                    <h1 className='card-1'>Premium</h1>

                    <p className='price'>$199.99/mo</p>
                    <br></br><br></br>
                    <button className='btn'>Get Started</button>
                    <hr></hr>
                    <div className='para'>
                        <h4>What you'll get</h4>
                        <CgProfile className='icons-1' />
                        <span>upto 100 Users</span>
                        <br />
                        <TiCloudStorageOutline className='icons-1' />
                        <span>Upto 100gb Storage</span>
                        <br />
                        <AiOutlineMail className='icons-1' />
                        <span>Email Support</span>

                    </div>






                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard