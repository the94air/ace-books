import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import lib from '../../images/lib2.jpg';

const Banner = (props) => {
  return (
    <div>
      <Jumbotron fluid>
          <img src={lib} className="jumbotron-bg" alt="Banner"/>
          <Container className="banner">
            <h1 className="display-3">Welcome to Ace Books</h1>
            <p>The publisher dedicated to meeting the information needs of IT professionals, developers, and tech enthusiasts worldwide</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Container>
      </Jumbotron>
    </div>
  );
};

export default Banner;
