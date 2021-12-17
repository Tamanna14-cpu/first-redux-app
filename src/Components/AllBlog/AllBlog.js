import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddBlog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://rocky-castle-59670.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


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
                    {
                        services.map((service) => <Col key={service._id}>


                            <Card className="card-height my-5">

                                <Row md={2}>
                                    <Col>
                                        <Card.Img variant="top" className="img-fluid py-2 ps-3" src={service.image} />
                                    </Col>


                                    <Col>
                                        <Card.Body>
                                            <Card.Title>
                                                {service.title}
                                            </Card.Title>

                                            <Card.Text>
                                                {service.description}
                                            </Card.Text>
                                        </Card.Body>

                                        <Link to={`/placeOrder/${service._id}`}>
                                            <button type="button" className="btn btn-outline-secondary service-btn">
                                                Add to reading list
                                            </button>
                                        </Link>

                                    </Col>

                                </Row>
                            </Card>


                        </Col>)
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default AddBlog;