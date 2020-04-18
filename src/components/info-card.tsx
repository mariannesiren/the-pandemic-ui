import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 1rem 2rem 1.5rem 2rem;
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1240px) {
    margin: 1rem;
  }
`;

const InfoCardHeader = styled.h2`
  margin-top: 0;
`;

const InfoCardNumber = styled.div`
  font-size: 32px;
`;

const InfoCard = ({ header }: { header: string }) => {
  return (
    <Card>
      <InfoCardHeader>{header}</InfoCardHeader>
      <InfoCardNumber>1,804,668</InfoCardNumber>
    </Card>
  );
};

export default InfoCard;
