import { Sidebar } from 'lucide-react'
import React from 'react'
import Topnav from '../Components/Topnav'
import { Col, Row } from 'react-bootstrap'

function MainPage() {
  return (
    <div className='main-page'>
      <Topnav />
      
      <div className='status p-4'>
        <h2>Recent Works</h2>
        <Row>
          <Col>
            <div className="child1 p-5 border" style={{backgroundColor:'#D8EAFB'}}>
              
            </div>
          </Col>
          <Col>
            <div className="child1 p-5 border" style={{backgroundColor:'#E9EBEA'}}>
              
            </div>
          </Col>
          <Col>
            <div className="child1 p-5 border" style={{backgroundColor:'#CAD7FB'}}>
              
            </div>
          </Col>
          <Col>
            <div className="child1 p-5 border" >
              
            </div>
          </Col>
        </Row>
      </div >
      <div className='work'>
        <Row>
          <Col sm={6}>
            <div className="child2 p-5 border">

            </div>
          </Col>
          <Col sm={3}>
            <div className="child2 p-5 border">

            </div>
          </Col>
          <Col sm={3}>
            <div className="child2 p-5 border">

            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainPage