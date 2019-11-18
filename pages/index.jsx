import React from 'react';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/AboutBox';

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Home />
        <About />
      </>
    );
  }
}

export default Index;
