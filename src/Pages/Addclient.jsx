import { Col, Row } from 'react-bootstrap'
import Sidebar from '../Components/Sidebar'
import React from 'react'
import User from '../Assets/user.jpg'
import { Link } from 'react-router-dom'
function Addclient() {
  return (
    <div className='' style={{display:'flex'}} >
      <Sidebar />
      <div className='AllMod'>
        <h4>Add New Client</h4>

      <Row>
        <Col sm={8}>

        <form className='add-clnt'>
          <div className='form-group' style={{display:'flex',gap:'2%'}}>
            <input type="text" placeholder='Enter Your First name' className='form-control' />
            <input type="text" placeholder='Enter Your Second name' className='form-control' />
          </div>
          <div className='form-group' style={{display:'flex',gap:'2%'}}>
            <input type="number" placeholder='Enter Your Number' className='form-control' />
            <input type="date" className='form-control' />
          </div>
          
          <input type="email" placeholder='Enter Your Email' className='form-control ' />
          <input type="text" placeholder='Enter Your Address' className='form-control ' />
          <input type="message" placeholder='Your Hobbies' className='form-control '/>
          <div className="form-group" style={{display:'flex',gap:'2%'}} >
            <input type="text" placeholder='Enter Your Instagram Id' className='form-control ' />
            <input type="text" placeholder='Entr Your Facebook Id' className='form-control ' />
          </div>
        </form>

        </Col>
        <Col sm={4} className='user-profile text-center'>

          <img src={User} alt="" />

          <form action="">
            <input type="file" />
          </form>

          <div className="group-btn" >
            <Link to='/addclient'><button className='btn btn-warning'>Reset</button></Link>
            <Link to='/viewclient'> <button className='btn btn-success'>Add Client</button></Link>
          </div>
          

        </Col>
      </Row>

      </div>
      
    </div>
  )
}

export default Addclient