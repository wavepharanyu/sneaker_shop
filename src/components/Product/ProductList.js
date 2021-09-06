import styled from 'styled-components';

import BaseContainer from '../Container';
import ProductItem from './ProductItem';

const Container = styled(BaseContainer)`
  padding-bottom: 120px;
  display: grid;
  gap: 32px;
  @media screen and (min-width: 512px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProductList = (props) => {
  const { products, delProduct, editProduct } = props;

  const showProduct = () => {
    return(
      products && products.map(product => (
        <ProductItem key={product.id} product={product} delProduct={delProduct} editProduct={editProduct}/>
      ))
    )
  }

  return(
  <Container>
    {showProduct()}
  </Container>
  );
}

export default ProductList;