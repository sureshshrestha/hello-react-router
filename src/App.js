import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;
const Links = () =>
    <nav>
      <Link activeStyle={{color: 'green'}} to="/">Home</Link>
      <Link activeStyle={{color: 'green'}} to="about">About</Link>
      <Link activeClassName="active" to="contact">Contact</Link>
    </nav>


const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Router>
  )
};

export default App;
