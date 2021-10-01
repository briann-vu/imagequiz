
import flowers from './data';
import * as ReactBootStrap from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
function Home() {

    return (
        <div>
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
        <container>
            <h1>Welcome to the Image Quiz home screen!</h1>
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
        </container>
        </div>
        
    );
}

export default Home;

/*
<img src={flower.picture} alt='flower' fluid/>
                    <p>{flower.name}</p>
*/
