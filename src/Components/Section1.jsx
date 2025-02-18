import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css'
import { FaRegStar } from "react-icons/fa";
import { Container } from 'react-bootstrap';


function Section1() {
 

  return (
    <>
     <Container>
     <div className="section1">
        <div className='sec1-content'>
            <p className='light-white'>Stay on budget and build wealth without sacrificing your privacy.</p>
        </div>
        <div className='sec1-content lh-1'>
            <p className='text-white fs-72'>An open source alternative to Mint, YNAB, and more.</p>
        </div>
        <div className='sec1-content'>
            <p className='text-light-grey fs-5'>
            Keep investors and their buyers out of your financial data. Own 100% of your data and start building financial wealth.
            </p>
        </div>
        <div>
            <div className="d-flex gap-3 mb-2 mt-5">
                <Button variant="outline-secondary" size="lg" >
                <FaRegStar className='me-2 mb-1' />  Star On Github
                </Button>
                <Button variant="primary" size="lg" className='px-5'>
                    Get Notified
                </Button>
            </div>
        </div>  

     </div>

     <div className='db mt-5'>
        <img src="../../images/db.png" alt="dashboard" className='img-fluid'/>
     </div>
     </Container>
    </>
  )
}

export default Section1