import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  padding: 1rem;
  background: #343381;
  flex: 0 1 auto;
`;

const ContainerSection = styled.div`
  padding: 2.5rem;
  text-align: center;
  background: #4e4d9b;
  flex: 3 0 auto;
`;

const Header = styled.h1`
  font-size: 40px;
  letter-spacing: 5px;
  color: white;
  font-weight: 400;
`;

const Content = styled.div`
  color: white;
`;

const Sidebar = () => {
  return (
    <Container>
      <HeaderSection>
        <Header>The Pandemic</Header>
      </HeaderSection>
      <ContainerSection>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vulputate, orci id consectetur lacinia, velit.
        </Content>
      </ContainerSection>
    </Container>
  );
};

export default Sidebar;
