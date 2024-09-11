import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='log-main'>
        <Row className='container-fluid'>
            <Col className='log-bg' sm={8} ></Col>

            <Col className='log-form'>
            <h1>Welcome Back</h1>
            <p>Please Enter Your details</p>
                <form>
                    <input type="text" placeholder='Enter Your Username' id='user' />
                    <input type="Password" placeholder='Enter Your Password' id='password' />
                    <Link to='/dashboard'><button className='btn btn-dark mt-3 '>Submit</button></Link>
                </form>


            </Col>
        </Row>
    </div>
  )
}

export default Login