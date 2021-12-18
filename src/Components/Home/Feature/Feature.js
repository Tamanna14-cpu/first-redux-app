import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import featurePic from '../../../image/way.png';
import Fade from 'react-reveal/Fade';

const Feature = () => {
    return (

        <Container>
            <Row>
                <Col className="mt-5 pt-5">
                    <Fade left>
                        <h1>FINDING YOUR WAY THROUGH</h1>
                        <q>Traveling means giving yourself and your mind a break from the monotonous pattern of life, each one of us live day in and out. ... It could be the journey to the destination, the picturesque sightseeing, or the friendly people you meet on your way. Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</q>
                    </Fade>
                </Col>

                <Col>
                    <Fade right>
                        <img src={featurePic} alt="" className="img-fluid" />
                    </Fade>
                </Col>
            </Row>

        </Container>

    );
};

export default Feature;