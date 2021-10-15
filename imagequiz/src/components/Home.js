
import flowers from './flowers';
import * as ReactBootStrap from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";
import { useHistory } from 'react-router-dom'

function Home() {


    const [username] = useState('');
    const location = useLocation();
    const history = useHistory();
    //location.state.username = 'user'

    let goToQuiz = (flowerName) => {
        history.push({ pathname: '/quiz', state: { flowerName: flowerName } });
    }


    return (
        <div>
            <Container>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand href="#/">Image Quiz</ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootStrap.Nav className="me-auto">
                                <ReactBootStrap.Nav.Link href="#signup">Sign Up</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#login">Log In</ReactBootStrap.Nav.Link>
                                {//for now, until i add functionality to images
                                }
                            </ReactBootStrap.Nav>
                            <ReactBootStrap.Nav>
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </Container>
            <Container>
                <h1>Welcome to the Image Quiz home screen! Click an image to start a quiz!</h1>

                {/* 
                    <h1>Welcome to the Image Quiz home screen, {location.state.username}!</h1>
                */}

                {flowers.map((flower, i) => (
                    <div key={`flower ${i}`}>

                        <Figure onClick={() => goToQuiz(flower.name)} class="text-center">
                            <Figure.Image

                                alt={flower.name}
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
