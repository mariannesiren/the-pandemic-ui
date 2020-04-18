import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './components/sidebar';
import ConfirmedCases from './components/confirmed-cases';
import RecentNumbers from './components/recent-numbers';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 400;
      background: #e8e6ef;  
    }
    #root {
      display: flex;
    }
`;

const Content = styled.div`
  flex: 2 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1240px) {
    flex-direction: column;
  }
`;

const App = () => {
  return (
    <>
      <Sidebar />
      <Content>
        <Container>
          <ConfirmedCases />
          <RecentNumbers />
        </Container>
      </Content>
      <GlobalStyle />
    </>
  );
};

export default App;
