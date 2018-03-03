import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header.jsx';
import Banner from '../component/Banner.jsx';
import Soras from '../component/Soras.jsx';
import Footer from '../component/Footer.jsx';
import Books from '../component/Books.jsx';
import Sidebar from '../component/Sidebar.jsx';

class Home extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Banner />
          <Soras />
          <Footer/>
        </div>
      );
    }
}

export default Home;