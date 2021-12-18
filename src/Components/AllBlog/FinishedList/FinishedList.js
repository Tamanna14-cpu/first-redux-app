import React, { useState } from 'react';
import { Button, Col, Container, Row, Offcanvas, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FinishedList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const finishedList = useSelector((state) => state.books.finishedList)

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

                            <Link to="/finished">
                                <h4>Finished List</h4>
                            </Link>

                        </Offcanvas.Body>
                    </Offcanvas>

                </Col>


                <Col>
                    {
                        finishedList.map((pd) => <Col key={pd._id} >

                            <Card className=" my-5" >


                                <Row md={2}>
                                    <Col>
                                        <Card.Img variant="top" className="img-fluid py-2 ps-3" src={pd.image} />
                                    </Col>


                                    <Col>
                                        <Card.Body>
                                            <Card.Title>
                                                {pd.title}
                                            </Card.Title>

                                            <Card.Text>
                                                {pd.description}
                                            </Card.Text>
                                        </Card.Body>

                                    </Col>

                                </Row>
                            </Card>
                        </Col>)}


                </Col>
            </Row>
        </Container>
    );
};

export default FinishedList;