
import styled from 'styled-components';

import BaseContainer from '../components/Container';
import Button from '../components/Button';
import CartList from '../components/Cart/CartList';
import useCart from '../hooks/useCart';

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    padding-top: 78px;
    padding-bottom: 78px;
`;

const Title = styled.h1`
    font-family: Verdana;
    font-size: 32px;
`;

const CheckOutButton = styled(Button)`
  align-self: flex-end;
  margin-top: 20px;
`;

const Cart = () => {
    const {cartItems, updateQuantity, deleteCartItem, checkout, validForCheckout} = useCart();
    return(
        <Container>
            <Title>MY CART</Title>
            <CartList data={cartItems} updateQuantity={updateQuantity} deleteCartItem={deleteCartItem}/>
            <CheckOutButton disabled={!validForCheckout} onClick={() => {
                if(window.confirm("ต้องการดำเนินการต่อ?")){
                    checkout();
                }
            }}>Check out</CheckOutButton>
        </Container>
    )
}

export default Cart;