import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const getPhrase = async () => {
  const api = await fetch(
    'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
  );
  const phrase = await api.json();
  console.log(phrase);
};

function App() {
  return (
    <Container>
      <Button onClick={getPhrase}>Get phrase</Button>;
    </Container>
  );
}

export default App;
