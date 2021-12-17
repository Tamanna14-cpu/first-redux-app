import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Offcanvas, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ReadingList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [manageOrders, setManageOrders] = useState([]);


    useEffect(() => {
        fetch(`https://rocky-castle-59670.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setManageOrders(data)
            });
    }, []);



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
                        manageOrders.map((pd) => <Col key={pd._id} >

                            <Card className=" my-5" >


                                <Row md={2}>
                                    <Col>
                                        <Card.Img variant="top" className="img-fluid " src={pd.image} />
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

export default ReadingList;