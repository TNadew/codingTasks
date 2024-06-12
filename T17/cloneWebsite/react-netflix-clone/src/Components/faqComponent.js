import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../Style/faqComponentStyle.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**Custom accordion componenent to be used in the FAQ  */
function CustomFaqAccordion({ items }) {
    return (
        <div id='defaultMargin'>
            <h2>Frequently Asked Questions</h2>
            <Accordion id='customAccordion' >
                {items.map((item, index) => (
                    <Accordion.Item className='accordionItem' key={index} eventKey={index.toString()}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>{item.content}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <div >
                <Form>
                    <Form.Group className="mb-3" aria-label="Sign up or restart your membership with Netflix." method="post">
                        <h3 className='defaulth3' >Ready to watch? Enter your email to create or restart your membership.</h3>
                        <Container  >
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Form.Control id="emailForm" className="p-2" type="email" placeholder="Email address" />
                                </Col>
                                <Col md="auto">
                                    <Button className="p-2 " role="button" type="submit" variant='danger'>Get Started</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default CustomFaqAccordion;