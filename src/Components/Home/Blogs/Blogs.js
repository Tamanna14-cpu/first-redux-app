import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchBooks } from '../../../redux/slices/blogSlice';

const Blogs = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://rocky-castle-59670.herokuapp.com/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data.slice(0, 6)));
    // }, [])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks());
    }, [])

    const books = useSelector((state) => state.books.discover)


    return (
        <Container>

            <h1 className="mt-5 pt-5 text-center">FEATURED BLOG POSTS</h1>

            <Row xs={1} md={3} className="g-5 my-5 pb-5 container">

                {
                    books.map((service) => <Col key={service._id}>


                        <Card className="card-height service-card">
                            <Card.Img variant="top" className="service-img" src={service.image} />
                            <Card.Body>

                                <Card.Title>
                                    {service.title}
                                </Card.Title>

                            </Card.Body>

                        </Card>


                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default Blogs;