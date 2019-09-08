import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const App = () => (
  <Layout>
    <Router>
      <Home path="/app/home" />
    </Router>
  </Layout>
);

export default App;
