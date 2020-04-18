import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #ddd7f0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 0 2rem 1.5rem 2rem;
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

const Header = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 14px;
  color: white;
  font-weight: 400;
  background: #343381;
  padding: 0.5rem;
  width: 150px;
  @media (max-width: 1240px) {
    margin: 1rem;
  }
`;

const ContentHeader = styled.h2`
  font-size: 14px;
`;

const Content = styled.div`
  width: 250px;
`;

const Text = styled.div`
  padding: 0.5rem 0 0.5rem 0;
`;

const FactsCard = () => {
  return (
    <Container>
      <Header>DID YOU KNOW?</Header>
      <Content>
        <ContentHeader>Some facts about COVID-19</ContentHeader>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          venenatis dui odio, ac tempus enim suscipit ut. Fusce eleifend velit
          quis arcu viverra elementum.
        </Text>
        <Text>
          Morbi suscipit tincidunt turpis. Nulla et metus sollicitudin, aliquet
          ligula sed, cursus ligula. Quisque placerat nec sapien sit amet
          luctus. Aenean nisi quam, varius nec condimentum.
        </Text>
      </Content>
    </Container>
  );
};

export default FactsCard;
