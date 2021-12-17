import React, { useState } from 'react';
import { Button, Col, Container, Row, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FinishedList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <Container>
            <Row>
                <Col className="mt-5" md={2}>

                    <Button variant="primary" onClick={handleShow}>
                        Menu
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>

                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <Link to="/blog">
                                <h4>All Blogs</h4>
                            </Link>

                            <Link to="/reading">
                                <h4>Reading List</h4>
                            </Link>

                            <Link to="/finished">
                                <h4>Finished List</h4>
                            </Link>

                        </Offcanvas.Body>
                    </Offcanvas>

                </Col>


                <Col>


                </Col>
            </Row>
        </Container>
    );
};

export default FinishedList;