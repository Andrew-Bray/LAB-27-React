import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from '../listpage/ListPage.jsx';
import DetailPage from '../detailpage/DetailPage.jsx';
import Home from '../home/Home.jsx';
import Header from '../header/Header.jsx';

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
