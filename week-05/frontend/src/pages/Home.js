import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>JavaScript Learning Journey</h1>
      <nav>
        <ul>
          <li><Link to="/js-fundamentals">JS Fundamentals</Link></li>
          <li><Link to="/dom-manipulation">DOM Manipulation</Link></li>
          <li><Link to="/async-js">Async JS</Link></li>
          <li><Link to="/js-functions">JS Functions</Link></li>
          <li><Link to="/todo-app">TODO App</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
