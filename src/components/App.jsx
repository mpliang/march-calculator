import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Clock from './Clock/Clock';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div>
      <section id="hero">
        <Container>
          <Fade duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              <span className="text-color-main">March Time Calculator</span>
            </h1>
          </Fade>
          <Fade duration={1000} delay={1000} distance="30px"></Fade>
        </Container>
      </section>
      <div className='body'>
        <Calculator />
        <Clock />
      </div>
      <div className='footer'>For those that struggle with math (MrH and CDBGM)</div>
    </div>
  )
}

export default App;
