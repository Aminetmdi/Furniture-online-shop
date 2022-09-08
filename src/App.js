import React, { Component } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Services from './Components/Services';
import Options from './Components/Options';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Cards />
        <Services />
        <Options />
        <Contactus />
        <Footer />
      </div>
    );
  }
}

export default App;