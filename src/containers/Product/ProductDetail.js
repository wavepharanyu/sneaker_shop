import { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import BaseContainer from '../../components/Container';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAPI from "../../hooks/useAPI";
import useCart from '../../hooks/useCart';

import { numberWithCommas } from '../../utils';

const Container = styled(BaseContainer)`
    padding-top: 75px;
    padding-bottom: 208px;
    display: grid;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 96px;
    }
`;

const ProductImage = styled.img`
    width: 100%;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 10px;
`;

const Category = styled.p`
  font-size: 24px;      
  color: #838282;
  margin-bottom: 36px;
`;

const Description = styled.p`
  font-size: 24px;
  line-height: 35px;
  font-weight: 300; 
  margin-top: 0;
`;


const ProductDetail = () => {
  const {productId} = useParams();
  const [quantity, setQuantity] = useState("1");

  const {data ,loading} = useAPI("/products/" + productId);
  const { addCartItem } = useCart();

  if(!data || loading) return <div>loading...</div>
  return(
    <Container>
      <ProductImage src={data.thumbnail}  />
      <ProductInfo>
        <Title>
          <span><Name>{data.productName}</Name></span>
          <span>{numberWithCommas(data.unitPrice)}฿</span>
        </Title>
        <Category>{data.category}</Category>
        <Description>{data.description}</Description>
        <Input value={quantity} 
        onChange={(e) => setQuantity(e.target.value)}
        style={{ marginBottom: '40px' }} 
        type={'number'} 
        label={'Quantity'} />
        <Button disabled={!(quantity % 1 === 0 && quantity > 0)} onClick={() => {
          addCartItem(data, parseInt(quantity))
          alert('เพิ่มสินค้าลงตะกร้าสำเร็จ')
        }}>
          ADD TO CART
        </Button>
      </ProductInfo>
    </Container>
  )
}

export default ProductDetail;