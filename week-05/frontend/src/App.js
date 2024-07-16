import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import JSFundamentals from './pages/JSFundamentals';
import DOMManipulation from './pages/DOMManipulation';
import AsyncJS from './pages/AsyncJS';
import JSFunctions from './pages/JSFunctions';
import TodoApp from './pages/TodoApp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/js-fundamentals" component={JSFundamentals} />
        <Route path="/dom-manipulation" component={DOMManipulation} />
        <Route path="/async-js" component={AsyncJS} />
        <Route path="/js-functions" component={JSFunctions} />
        <Route path="/todo-app" component={TodoApp} />
      </Switch>
    </Router>
  );
}

export default App;
