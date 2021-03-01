import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Service from "./components/Service/";
import About from "./components/About/";
import Register from "./components/Register/";
// import Contact from "./components/Contact/";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Service} />
        <Route path='/about' component={About} />
        <Route path='/register' component={Register} />
        {/* <Route path='/contact' component={Contact} /> */}
        {/* <Route path='/products' component={Products} /> */}
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router> 
  );
}

export default App;
