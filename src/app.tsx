import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Dashboard from './components/dashboard';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 400;
      background: #ebeeff;
      padding: 2rem;
    }
`;

const App = () => {

  return (
    <>
      <Dashboard />
      {/*<GlobalStyle />*/}
    </>
  );
};

export default App;
