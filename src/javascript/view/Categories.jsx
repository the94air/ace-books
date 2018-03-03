import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import Books from '../component/Books.jsx';
import Sidebar from '../component/Sidebar.jsx';

class Categories extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Container>
            <Row>
                <Col md="4">
                    <Sidebar />
                </Col>
                <Col md="8">
                    <Books />
                </Col>
            </Row>
          </Container>
          <Footer/>
        </div>
      );
    }
}

export default Categories;