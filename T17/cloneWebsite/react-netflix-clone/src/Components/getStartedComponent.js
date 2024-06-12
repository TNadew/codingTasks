import "../Style/ComponentsStyle.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/** Component for client signing up  */
function getStarted() {
    return (
        <div id="getStarted">
            <div>
                <h1 className='defaulth1'>Unlimited films, TV programmes and more</h1>
                <p className='defaultp' >Watch anywhere. Cancel at any time.</p>
                <div >
                    <div >
                        <Form>
                            <Form.Group className="mb-3" aria-label="Sign up or restart your membership with Netflix." method="post">
                                <h3 className='defaulth3' >Ready to watch? Enter your email to create or restart your membership.</h3>
                                <Form.Label className='defaultColor'>Email address</Form.Label>
                                <Container  >
                                    <Row className="justify-content-md-center">
                                        <Col md="auto">
                                            <Form.Control id="emailForm" className="p-2" type="email" placeholder="name@example.com" />
                                        </Col>
                                        <Col md="auto">
                                            <Button className="p-2 " role="button" type="submit" variant='danger'>Get Started</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form.Group>
                        </Form>
                    </div>
                    <div >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default getStarted;