import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Switch>
        <Route exact path='/'>
          <Search />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
