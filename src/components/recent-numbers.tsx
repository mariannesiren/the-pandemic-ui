import React from 'react';
import styled from 'styled-components';
import InfoCard from './info-card';
import FactsCard from './facts-card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 24px;
  color: white;
  font-weight: 400;
  background: #343381;
  padding: 0.5rem 3rem 0.5rem 3rem;
  @media (max-width: 1240px) {
    margin: 1rem;
  }
`;

const RecentNumbers = () => {
  return (
    <Container>
      <Header>Most recent numbers</Header>
      <InfoCard header="Confirmed" />
      <InfoCard header="Active" />
      <InfoCard header="Recoveries" />
      <InfoCard header="Deaths" />
      <FactsCard />
    </Container>
  );
};

export default RecentNumbers;
