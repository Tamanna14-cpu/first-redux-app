import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToReadingList, fetchBooks } from '../../redux/slices/blogSlice';
import Zoom from 'react-reveal/Zoom';



const AddBlog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks());
    }, [])

    const books = useSelector((state) => state.books.discover)



    // const addBlog = () => {

    //     axios.post('https://rocky-castle-59670.herokuapp.com/manageOrders')
    //         .then(res => {
    //             console.log("amar data", res.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });


    // };


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


                <Col >
                    {
                        books.map((service) => <Col key={service._id}>


                            <Zoom>
                                <Card className=" my-5" >

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


                                            <button onClick={() => dispatch(addToReadingList(service))} type="submit" className="btn btn-outline-secondary ms-3">
                                                Add to Reading List
                                            </button>


                                        </Col>

                                    </Row>
                                </Card>

                            </Zoom>


                        </Col>)
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default AddBlog;