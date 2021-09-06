import styled from 'styled-components';

import BaseContainer from '../components/Container';

import useAPI from '../hooks/useAPI';
import { numberWithCommas } from '../utils';

const Wrapper = styled(BaseContainer)`
    padding-top: 38px;
    padding-bottom: 38px;
    line-height: 2.5;
`;

const Container = styled(BaseContainer)`
    display: grid;
    gap: 32px;
    @media screen and (min-width: 512px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Title = styled.h1`
    font-family: Verdana;
    font-size: 32px;
`;  

const DelButton = styled.button`
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 7px;
    float: right;
    cursor: pointer;
`;


const Orders = () => {
    const {data, loading, onDelete} = useAPI("/orders");

    return(
        <Wrapper>
            <Title>Orders</Title>
            <Container>
                {loading && <div>Loading...</div>}
                {!loading && data && 
                data && data.map(order => {
                    const date = new Date(order.orderedDate);
                    return(
                        <div>
                            <hr/>
                            <DelButton onClick={() => {
                                if(window.confirm("ต้องการดำเนินการต่อ?")){
                                    onDelete(order.id);
                            }}}>X</DelButton>
                            <h3>Date: {date.toLocaleDateString()} {date.toLocaleTimeString()}</h3>
                            <ul>
                                {order.cartItems && order.cartItems.map(record => {
                                    return(
                                    <li key={record.id}>
                                        {record.product.productName} x {record.quantity} = {numberWithCommas(record.product.unitPrice * record.quantity)}฿
                                    </li>)
                                })}
                            </ul>
                            <p>Total Price {numberWithCommas(order.totalPrice)}฿</p>
                        </div>
                    );
                })
        }
            </Container>
        </Wrapper>
    )
}

export default Orders;