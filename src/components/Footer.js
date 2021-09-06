import styled from 'styled-components';
import BaseContainer from '../components/Container';


const Wrapper = styled.div`
  background-color: #BEE5D3;
  margin-top: 37px
`;

const Container = styled(BaseContainer)`
  color: black;
  height: 72px;
`;

const Text = styled.p`
  font-family: Cursive;
  text-align: center;
  padding: 20px 0;
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <Text>Powered By Pharanyu | Contact By Email : wavepharanyu@gmail.com</Text>
    </Container>
  </Wrapper>
);

export default Footer;