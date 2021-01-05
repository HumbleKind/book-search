import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Banner from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
        <Container>
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route exact path='/saved'>
            <Saved />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
