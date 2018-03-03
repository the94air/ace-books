import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class Footer extends React.Component{
    render(){
        return (
            <footer className="footer">
                <Container fluid>
                    <Row>
                        <Col md="6">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="https://www.creative-tim.com">
                                            Creative Tim
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://presentation.creative-tim.com">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://blog.creative-tim.com">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md">
                                            MIT License
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                        <Col md="6">
                            <div className="copyright">
                                &copy;{1900 + (new Date()).getYear()}
                            , Designed by
                                <a href="http://acegroup.js.org" target="_blank">Ace Group</a>. Coded by
                                <a href="https://abdalla.js.org" target="_blank">Abdalla Arbab</a>.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
}

export default Footer;