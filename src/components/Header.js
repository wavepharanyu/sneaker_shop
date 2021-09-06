import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BaseContainer from './Container';
import useCart from "../hooks/useCart";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #BEE5D3;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  height: 78px;
`;

const Logo = styled.img`
  width: 85px;
  object-fit: contain;
  margin: 0 25px;
  
`;

const CartIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0px 35px;
  border-radius: 50%;
  background: ${(props) =>
    props.active
      ? `url('/assets/images/cart-active.svg')`
      : `url('/assets/images/cart.svg')`};
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: ${(props) => (props.active ? '#ddeefa' : 'rgba(0, 0, 0, 0.1)')};
  }
`;

const CartBadge =  styled.div`
  position: absolute;
  background-color: red;
  width: 16;
  height: 16;
  border-radius: 30%;
  left: 25px;
  bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const CartCount =  styled.div`
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 8;
  font-weight: bold;
  padding: 2px;
`;

const MenuGroup = styled.ul`
  list-style: none;
  font-family: Cursive;
`
const Menu = styled.li`
  display: inline-block;
  padding: 0px 16px;
`

const Header = () => { 
  const {cartItems} = useCart();
  const num = cartItems.reduce((a,v) =>  a = a + parseInt(v.quantity) , 0 );
  return(
    <Wrapper>
        <Container>
          <Link to={'/'}>
            <Logo src={'/assets/images/logo.png'} alt={'logo'} />
          </Link>
          <h1 style={{fontFamily:"Cursive"}}>Sneaker Store</h1>
          <MenuGroup>
            <Menu><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link></Menu>
            <Menu><Link to="/orders" style={{textDecoration: 'none', color: 'black'}}>Orders</Link></Menu>
            <Menu><Link to="/products" style={{textDecoration: 'none', color: 'black'}}>Edit</Link></Menu>
            <Menu><Link to="/about" style={{textDecoration: 'none', color: 'black'}}>About</Link></Menu>
          </MenuGroup>
          <Link to={'/cart'}>
            <CartIcon active={cartItems && cartItems.length > 0}>
            {num > 0 &&
            <CartBadge>
                    <CartCount>
                      {num}
                    </CartCount>
            </CartBadge>
            }
            </CartIcon>
          </Link>
        </Container>
    </Wrapper>
  )
};
  
  export default Header;