
import flowers from './data';
import * as ReactBootStrap from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function Home() {


    const [username] = useState('');
    const location = useLocation();
    //location.state.username = 'user'



    return (
        <div>
            <Container>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand href="#home">Image Quiz</ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootStrap.Nav className="me-auto">
                                <ReactBootStrap.Nav.Link href="#signup">Sign Up</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#login">Log In</ReactBootStrap.Nav.Link>
                            </ReactBootStrap.Nav>
                            <ReactBootStrap.Nav>
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </Container>
            <Container>
                <h1>Welcome to the Image Quiz home screen!</h1>

                {/* 
                    <h1>Welcome to the Image Quiz home screen, {location.state.username}!</h1>
                */}

                <p>Here are some flowers:</p>
                {flowers.map((flower, i) => (
                    <div key={`flower ${i}`}>

                        <Figure>
                            <Figure.Image

                                alt="171x180"
                                src={flower.picture}
                            />
                            <Figure.Caption>
                                {flower.name}
                            </Figure.Caption>
                        </Figure>
                    </div>
                ))}
            </Container>
        </div>

    );
}

export default Home;

/*
<img src={flower.picture} alt='flower' fluid/>
                    <p>{flower.name}</p>
*/
