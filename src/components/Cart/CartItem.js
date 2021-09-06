import styled from 'styled-components';

import Input from '../Input';

import { numberWithCommas } from '../../utils';

const TableRow = styled.tr`
    border-bottom: 1px solid #dcdcdc;
`;

const TableCell = styled.td`
    padding: 20px 0px;
`;

const ItemImage = styled.img`
    display: block;
    width: 140px;
    height: 140px;
    margin-right: 32px;
`;

const ItemInfo = styled.div`
    padding: 12px 0px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 24px;
    line-height: 37px;
    color: #000000;
`;

const Subtitle = styled.div`
    font-size: 20px;
    padding-top: 3px;
    color: #838282;
`;

const DeleteButton = styled.button`
    font-size: 20px;
    text-decoration: underline;
    color: #838282;
    background: none;
    border: none;
    width: fit-content;
    padding: 0;
    margin-top: auto;
    &:hover {
    opacity: 0.7;
    }

`;

const TotalPrice = styled.div`
    font-size: 24px;
    line-height: 37px;
    font-weight: 300;
    text-align: right;
    color: #000000;
`;

const CartItem = ({ product, quantity, updateQuantity, deleteCartItem }) => (
  <TableRow>
    <TableCell>
      <div style={{ display: 'flex' }}>
        <ItemImage src={product.thumbnail} alt={product.productName} />
        <ItemInfo>
          <Title>{product.productName}</Title>
          <Subtitle>{numberWithCommas(product.unitPrice)}฿ ต่อชิ้น</Subtitle>
          <DeleteButton onClick={() => {
            if(window.confirm("คุณต้องการให้ลบหรือไม่?")){
              deleteCartItem(product.id);
            }
          }}>ลบ</DeleteButton>
        </ItemInfo>
      </div>
    </TableCell>

    <TableCell style={{ textAlign: 'right' }}>
      <Input value={quantity} onChange={(e) => updateQuantity(product.id ,e.target.value)} type={'number'} />
    </TableCell>

    <TableCell style={{ textAlign: 'right' }}>
      <TotalPrice>{numberWithCommas(product.unitPrice * quantity)}฿</TotalPrice>
    </TableCell>
  </TableRow>
);

export default CartItem;