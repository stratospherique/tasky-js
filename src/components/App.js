import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from './navigation';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Done from './pages/done';
import NotFound from './pages/notFound';
import {MainContainer} from './styled/containers';

const App = () => {
  return (
    <>
    <Navigation />
    <MainContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" exact component={Tasks} />
        <Route path="/done" exact component={Done} />
        <Route path="*" component={NotFound} />
      </Switch>
    </MainContainer>
    </>
  );
}

export default App;
