import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import AuthContext from "../utils/AuthContext"

function Header(props) {

    let history = useHistory()
    const { user, updateUser } = useContext(AuthContext)
    const [buttonText, setButtonText] = useState("Sign In");

    useEffect(() => {
        if (user.loginState) {
            setButtonText("Sign Out");
        } else {
            setButtonText("Sign In");
        }
    }, [user])

    const handleClick = () => {
        if (buttonText === 'Sign In') {
            console.log('sign In');
            history.push("/signIn")
        } else {
            console.log('sign Out');
            updateUser({ ...user, loginState: false })
            history.push("/")
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand='lg' >
                <Navbar.Brand href="#home">Opinion Poll</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-sm-2 ml-auto">
                        {/* <Link className='btn btn-primary' onClick={() => handleClick()}>{buttonText}</Link> */}
                        <Button className="btn btn-primary" onClick={() => handleClick()}>
                            {buttonText}
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;