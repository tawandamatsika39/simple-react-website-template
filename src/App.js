import React from 'react';
import Nav from './Components/navbar.js';
import Home from './Components/home.js';
import About from './Components/about.js';
import Gallery from './Components/gallery.js';
import Contact from './Components/contact.js';
import Footer from './Components/footer.js'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <br/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
