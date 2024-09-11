import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Col, Row } from 'react-bootstrap'
import User from '../Assets/user.jpg'
import { Link } from 'react-router-dom'
function ViewClient() {
  return (
    <div className='' style={{display:'flex'}}>
        <Sidebar />
        <div className='view-client' >
            <div className="sub-view" ></div>
            <div className="sub-view2" >
                <div className="client-det" style={{display:'flex',gap:'2%'}}>

                
                    <div className="client-profile">
                        <Link to='/addclient'> <p style={{marginBottom: '0rem',float:'right'}}>Edit</p></Link>
                        <div className="userimg p-3 text-center">
                            <img src={User} alt="" />
                        </div>
                        
                        
                        <p>Name : Virat Vardhan</p>
                        <p>Number : +91 9558552309</p>
                        <p>Email : viratvardhan@email.com</p>
                        <p>Status : Active</p>
                        <p>Balance days : 33</p>
                        <p>Membership : 6M Package</p>

                    </div>
                    <div className="client-options">
                        options
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ViewClient