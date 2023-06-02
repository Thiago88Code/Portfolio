import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  gap:150px;
  padding:150px;
  `
const CardComponent = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid;
  img {
    width: 500px;
    height: 500px;
  }
 
`


export function Card() {

  return (
    <Container>
      <CardComponent><img src="src\assets\Screenshot 2023-05-11 203511.png" alt="" /></CardComponent>
      <CardComponent>hhhhh</CardComponent>
      <CardComponent>hhhhh</CardComponent>
      <CardComponent>hhhhh</CardComponent>
      <CardComponent>hhhhh</CardComponent>

    </Container>

  );
};

