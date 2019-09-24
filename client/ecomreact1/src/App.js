import React from 'react';
import {
  BrowserRouter as Router, Route
  // Redirect
} from 'react-router-dom'

import Home from './pages/index'
import Products from './pages/products'
import Contact from './pages/contact'
import Footer from './components/Footer1'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Nav />
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/contact" component={Contact}/>
      <Footer />

    </Router>
  );
}

export default App;
