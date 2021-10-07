import * as ReactBootStrap from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import customers from '../communication/customers'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let login = (e) => {
        e.preventDefault();
        let found = customers.find(x => x.username === username & x.password === password);
        if (found) {
            console.log('found');
            history.push({ pathname: '/', state: { username: username } });
        }
    }

    let onUsernameChanged = (e) => {
        setUsername(e.target.value);
    }

    let onPasswordChanged = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <Container>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand href="#home">Image Quiz</ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootStrap.Nav className="me-auto">
                                <ReactBootStrap.Nav.Link href="#signup">signup</ReactBootStrap.Nav.Link>
                            </ReactBootStrap.Nav>
                            <ReactBootStrap.Nav>
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </Container>
            <Container>
                <h1>Login to your account!</h1>
                <Form onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={username} onChange={onUsernameChanged} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChanged} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default LogIn;