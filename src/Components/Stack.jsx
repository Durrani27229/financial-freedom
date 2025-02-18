import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
import Button from 'react-bootstrap/Button';

const Stack = () => {
    const stackContent = [{
        image: '../../images/Laravel.png',
        title: 'Laravel',
        desc: 'One fo the most popular PHP frameworks with expressive and elegant syntax.'
    },
    {
        image: '../../images/Redis.png',
        title: 'Redis',
        desc: 'A popular in-memory data store used by millions as a database, cache, streaming engine, and message broker.'
    },
    {
        image: '../../images/Meilisearch.png',
        title: 'Meilisearch',
        desc: 'Meilisearch is a flexible and powerful user-focused search engine.'
    },
    {
        image: '../../images/docker.png',
        title: 'Docker',
        desc: 'Cutting-edge, containerized delivery.'
    },
    {
        image: '../../images/MariaDB.png',
        title: 'MariaDB',
        desc: 'One of the most popular open source relational databases engines.'
    },
    {
        image: '../../images/TailwindCSS.png',
        title: 'TailwindCSS',
        desc: 'The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.'
    }    
]
    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={12} md={12}>
                    <div className='stack'>
                        <Button variant="primary" size="sm" className='rounded-pill'>Our Stack</Button>
                        <p className='text-white fs-1 mt-3'>Trust Our Code, Not Our Words</p>
                        <p className='text-light-grey fs-5'>We’ve built this liberation on the best open source technologies available.</p>
                    </div>
                </Col>
            </Row>
            <Row className='bottom-line'>
                {stackContent.map((item, index) => {
                    return (
                        <Col sm={12} md={4} key={index}>
                    <div className='stack-content mt-5'>
                        <div className='stack-image'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <p className='text-white fs-5'>{item.title}</p>
                        <p className='text-light-grey'>{item.desc}</p>
                    </div>
                </Col>
                    )
                    
                })}
            </Row>
        </Container>
    )
}

export default Stack;