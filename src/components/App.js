import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/homePage';
import PetsPage from '../pages/PetsPage/petsPage';
import PetPage from '../pages/PetPage/petPage';
import AboutPage from '../pages/AboutPage/aboutPage';
import Nav from './Nav/Nav';
import Footer from '../pages/FooterPage/footerPage';
import design from './App.module.css';

class App extends Component {
  stats = {};

  render() {
    return (
      <div className={design.App}>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pets/:id" component={PetPage} />
          <Route path="/pets" component={PetsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
