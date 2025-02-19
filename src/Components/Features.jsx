import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

const Features = () => {

    const featuresContent = [{
        image: 'feature_icon1.png',
        title: 'Compatible with any bank',
        description: 'If your bank supports exporting a CSV file, Financial Freedom supports it.'
    },
    {
        image: 'feature_icon2.png',
        title: 'Automated Sync (coming soon)',
        description: 'Use API services like Plaid or Finicity for automated account data synchronization. For those who want ultimate privacy, synchronize your account with our decentralized alternative to Plaid & Finicity.'
    },
    {
        image: 'feature_icon3.png',
        title: 'Self-host anywhere',
        description: 'Financial Freedom is designed to run on any host as long as it can run Docker. Choose from AWS to a Raspberry Pi running in your basement.'
    }]




    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={12} md={6}>
                    <div className='lh-1'>
                        <p className='light-white'>Features</p>
                        <p className='text-white fs-1'>Decentralized Financial Budgeting.</p>
                        <p className='text-light-grey fs-5'>It’s the way sensitive data should always be handled.</p>
                    </div>
                </Col>
            </Row>
            <Row className='bottom-line'>
                <Col xs={12} sm={12} md={6} >
                    <div className="features">
                        {featuresContent.map((item,index) => {
                           return (
                            <div className="feat-content "key={index}>
                            <div className="feat-img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="feat-text">
                                <p className='text-white fs-5'>{item.title}</p>
                                <p className='text-light-grey '>{item.description}</p>
                            </div>
                        </div>
                           )
                            
                        })}
                    </div>
                </Col>
                <Col  xs={12} sm={12} md={6}>
                    <div className='content-img'>
                        
                    </div>
                </Col>
                
            </Row>
        </Container>
        
    )
}

export default Features;