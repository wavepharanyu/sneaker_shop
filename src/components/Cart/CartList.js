import styled from 'styled-components';

import { numberWithCommas } from '../../utils';
import CartItem from './CartItem';

const Table = styled.table`
    border-collapse: collapse;
`;

const TableHeadCell = styled.th`
    font-size: 24px;
    line-height: 36px;
    font-weight: 300;
`;

const SummaryTableCell = styled.td`
    font-size: 25px;
    font-weight: 600;
    text-align: right;
    padding: 21px 0px;
`;

const CartList = ({ data, updateQuantity, deleteCartItem }) => {
  const totalPrice = data.reduce((prev, cur) => prev + cur.quantity * cur.product.unitPrice, 0)
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadCell style={{ textAlign: 'left'}}>Item</TableHeadCell>
          <TableHeadCell style={{ textAlign: 'right'}}>Quantity</TableHeadCell>
          <TableHeadCell style={{ textAlign: 'right'}}>Price</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        {data.map((cartItem) => (
          <CartItem key={cartItem.id} 
          product={cartItem.product} 
          quantity={cartItem.quantity} 
          updateQuantity={updateQuantity}
          deleteCartItem={deleteCartItem}/>
        ))}

        <tr>
          <td></td>
          <SummaryTableCell>Total</SummaryTableCell>
          <SummaryTableCell>{numberWithCommas(totalPrice)}฿</SummaryTableCell>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartList;