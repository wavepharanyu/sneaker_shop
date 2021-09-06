import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../../utils';

const Wrapper = styled.div`
  margin-bottom: 10px;
  &:hover {
    opacity: 0.7;
  }
`;
const Image = styled.img`
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #000000;
`;

const Category = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: #838282;
`;

const EditButton = styled.button`
    background-color: #5bc0de;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 0px;
    font-size: 20px;
    float: left;
    width: 45%;
    cursor: pointer;
`;
const DelButton = styled.button`
    background-color: #d9534f;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 18px;
    font-size: 20px;
    float: right;
    width: 45%;
    cursor: pointer;
`;

const ProductItem = (props) => {
    const { delProduct, editProduct } = props;
    const {id, thumbnail, productName, unitPrice, category} = props.product;

    return(
        <div>
          <Wrapper>
          <Link to={`/products-detail/${id}`} style={{ textDecoration: 'none'}}>
              <Image src={thumbnail} />
              <Title>
                  <span>{productName}</span>
                  <span>{numberWithCommas(unitPrice)}฿</span>
              </Title>
              <Category>{category}</Category>
          </Link>
          </Wrapper>
          {editProduct &&
            <Link to={`/products/edit/${id}`}><EditButton>Edit</EditButton></Link>
          } 
          {delProduct && 
             <DelButton onClick={() => {
              if(window.confirm("ต้องการดำเนินการต่อ?")){
                  delProduct(id);
              }}}>
                Delete
              </DelButton>
          }
        </div>
    )
}

export default ProductItem;