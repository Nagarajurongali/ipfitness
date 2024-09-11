import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LoginNew() {
  return (
    <div className='container-fluid newlog p-4'>
        <Row>
            <Col className='log-newbg' sm={5}>
                hello
            </Col>
            <Col className='text-light p-5 w-100 text-center log-forms'>
                <h1>Welcome Back</h1>
                <p>Please Enter Your details</p>
                <form>
                    <input type="text" placeholder='Enter Your Username' /><br/>
                    <input type="Password" placeholder='Enter Your Password' /><br/>
                </form>
                <Link to='/dashboard' ><button className='btn p-2 m-2' style={{backgroundColor:'#6E54B5',width:'60%'}}>submit</button></Link>
                
                
            </Col>
        </Row>
    </div>
  )
}

export default LoginNew