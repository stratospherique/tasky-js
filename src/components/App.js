import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Navigation from './navigation';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Done from './pages/done';
import NotFound from './pages/notFound';
import {MainContainer} from './styled/containers';
import {BrowserRouter} from 'react-router-dom';
import FormContainer from './form';

const App = (props) => {

  console.log(props.formVisible);
  return (
    <BrowserRouter>
      <Navigation />
      <MainContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tasks" exact component={Tasks} />
          <Route path="/done" exact component={Done} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainContainer>
      {props.formVisible ? <FormContainer /> : null}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  formVisible: state.formVisible,
})

export default connect(mapStateToProps, null)(App);
