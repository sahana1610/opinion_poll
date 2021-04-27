import React, { useState } from 'react';
import { Navbar, Form, Button } from 'react-bootstrap'
import SignIn from './SignIn';

function Header(props) {

    const [showSignIn, setShowSignIn] = useState(false)

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand='lg' >
                <Navbar.Brand href="#home">Opinion Poll</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-sm-2 ml-auto">
                        <Button style={{ backgroundColor: "#176dc2" }} onClick={() => setShowSignIn(!showSignIn)}>Sign In</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {showSignIn ? <SignIn /> : null}
        </div>
    );
}

export default Header;