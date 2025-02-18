import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


const Community = () => {
    const communityContent = [{
        icon: <BsTwitterX />,
        title: "X (Twitter) ",
        desc: "Follow along @serversideup for our latest updates and projects.",
    },
    {
        icon: <FaDiscord />,
        title: "Discord ",
        desc: "Chat with the maintainers and meet friendly people who share the same interests as you.",
    },
    {
        icon: <FaGithub />,
        title: "Github ",
        desc: "Help us squash bugs, request features, and improve the documentation.",
    }    
]
    return (
        <Container className='mt-5'>
        <Row className='mt-5'>
            <Col sm={12} md={12}>
                <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                    <p className='h1 text-white'>Help the community grow.</p>
                    <p className='fs-5 text-light-grey'>Get involved to help people take control of their personal finances.</p>
                </div>
            </Col>
        </Row>
        <Row>
            {communityContent.map((item,index) => {
                return (
                    <Col sm={12} md={4} key={index} className='mt-5'>
                        <div className='text-center'>
                              <span className='text-white fs-5'>  {item.icon}</span>
                            <p className='text-white h4'>{item.title}</p>
                            <p className='fs-5 text-light-grey'>{item.desc}</p>
                        </div>    
                    </Col>
                )
                
            })}


        </Row>
        <Row>
            <div className='service'>
                <p className='text-light-grey'>⚡️ Powered by:</p>
                <img src="../../images/service.png" alt="service" />
            </div>
        </Row>
    </Container>
    )
}

export default Community;