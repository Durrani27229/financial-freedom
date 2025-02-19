import React from 'react'
import '../App.css'
import '../index.css'
import { Col, Container , Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Subscribe = () => {
    return (
        <Container className='mt-5'>
            <Row>
                {/* <Col sm={12} md={12}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='text-white fs-1'>🚀 We’re building in public.</p>
                        <p className='text-light-grey fs-5'>Follow along and get updates delivered right to your inbox.</p>
                    </div>
                </Col> */}
                <div className="subscribe">
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='text-white fs-1'>🚀 We’re building in public.</p>
                        <p className='text-light-grey fs-5'>Follow along and get updates delivered right to your inbox.</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-3 form'>
                        <input type="text" placeholder='Enter your email'/>
                        <Button variant="primary">Primary</Button>
                    </div>
                    <div className='d-flex gap-5 subs-content'>
                    <div className='d-flex flex-column justify-content-center align-items-center subs-img'>
                        <img src="Person.png" alt="" />
                        <h2 className='text-white'>Dan Pastori</h2>
                        <div className='text-white fs-5 d-flex gap-3'>
                        <BsTwitterX /><FaGithub />
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center subs-img'>
                        <img src="Person.png" alt="" />
                        <h2 className='text-white'>Dan Pastori</h2>
                        <div className='text-white fs-5 d-flex gap-3'>
                        <BsTwitterX /><FaGithub />
                        </div>
                    </div>
                    </div>
                    
                </div>

            </Row>
        </Container>
    )
}

export default Subscribe;