import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/HomeStyles.css"
import Stack from 'react-bootstrap/Stack'

/**Home page of souk.com for authentication */
export default function Home() {
    const [userName, setUserName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    /**Handle called to set loggedIn hook */
    const handleLogin = () => {
        if (userName.trim()) {
            setLoggedIn(true);
        }
    };

    /**Handle called to set loggedIn  and userName hooks */
    const handleLogout = () => {
        setUserName('');
        setLoggedIn(false);
    };

    return (
        <Stack direction='vertical' className='Authentication'>
            <h1>Home </h1>
            {loggedIn ? (
                <>
                    <h1>Welcome, {userName}!</h1>
                    <Button variant="dark" onClick={handleLogout}>Logout</Button>
                </>
            ) : (
                <>

                    <Form >
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    className=" mr-sm-2"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button variant="dark" onClick={handleLogin} >Login</Button>
                            </Col>
                        </Row>
                    </Form>

                </>
            )}
        </Stack>
    );
};