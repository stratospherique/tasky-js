import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './navigation';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Done from './pages/done';
import NotFound from './pages/notFound';
import { MainContainer } from './styled/containers';
import FormContainer from './form';

const App = ({ formVisible }) => (
  <BrowserRouter>
    <Navigation />
    <MainContainer>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/tasks" exact component={ Tasks } />
        <Route path="/done" exact component={ Done } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </MainContainer>
    {formVisible ? <FormContainer /> : null}
  </BrowserRouter>
);

const mapStateToProps = state => ({
  formVisible: state.formVisible,
});

export default connect(mapStateToProps, null)(App);
