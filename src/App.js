import React from 'react';

import { Footer, AboutUs, Header } from './containers';
import { Brand, Navbar } from './components';

import './App.css';
import Carousel from './containers/carousel/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomCursor from './components/CustomCursor';
import UpButton from './components/upButton/upButton';
AOS.init();


const App = () => (
  <div className="App">
    <CustomCursor />
    <UpButton />
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <AboutUs />
    <Carousel />
    <Footer />
  </div>
);

export default App;
