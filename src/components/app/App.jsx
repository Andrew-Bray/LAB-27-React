import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from '../listpage/ListPage';
import DetailPage from '../detailpage/DetailPage';
import Home from '../home/Home';
import Header from '../header/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps}/>}
          />
          <Route
            path="/list"
            exact
            render={(routerProps) => <ListPage {...routerProps} />}
          />
          <Route
            path="/character/:name"
            exact
            render={(routerProps) => <DetailPage {...routerProps} />}
          />
        </Switch>
        {/* <MySpecialFooter /> */}
      </Router>
    </>
  );}
