import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  background: #343381;
  font-size: 24px;
  color: white;
  font-weight: 400;
  padding: 0.5rem 8rem 0.5rem 8rem;
  @media (max-width: 1240px) {
    margin: 1rem;
  }
`;

const Row = styled.div``;

const ConfirmedCases = () => {
  return (
    <Container>
      <Row>
        <Header>Confirmed cases per 1million people</Header>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default ConfirmedCases;
