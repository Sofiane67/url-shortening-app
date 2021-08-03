import { Component } from 'react';
import { Provider } from 'react-redux';
import {store} from './redux';
import Header from './components/layout/Header/Header';
import './App.css';
import Hero from './components/layout/Hero/Hero';
import { Fragment } from 'react';
import Features from './components/layout/Features/Features';
import BoostSection from './components/layout/BoostSection/BoostSection';
import Footer from './components/layout/Footer/Footer';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Hero />
          <Features />
          <BoostSection />
          <Footer/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
