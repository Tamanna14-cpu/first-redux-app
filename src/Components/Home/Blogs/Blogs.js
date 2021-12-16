import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://safe-island-53802.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <Container>
            <Row xs={1} md={3} className="g-5 mb-5 pb-5 container">

                {
                    services.map((service) => <Col key={service._id}>


                        <Card className="card-height service-card">
                            <Card.Img variant="top" className="service-img" src={service.image} />
                            <Card.Body>

                                <Card.Title>
                                    {service.title}
                                </Card.Title>

                                <Card.Text>
                                    {/* <Rating
                            initialRating={service.review}
                            readonly
                            emptySymbol="far fa-circle"
                            fullSymbol="fas fa-circle">
                        </Rating>
                        <span className="ms-4">{service.review} review</span>

                        <br />
                        you can book this hotel with a beautiful countryside view!! <br /> <span className="fw-bold">from ${service.fee}/night</span> */}
                                </Card.Text>
                            </Card.Body>

                            {/* <Link to={`/placeOrder/${service._id}`}>
                    <button type="button" className="btn btn-outline-secondary service-btn">Book Now</button>
                </Link> */}

                        </Card>


                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default Blogs;