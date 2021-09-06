import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductList from '../../components/Product/ProductList';
import useAPI from "../../hooks/useAPI";

import BaseContainer from '../../components/Container';

const Wrapper = styled(BaseContainer)`
    padding-top: 38px;
    padding-bottom: 38px;
    line-height: 2.5;
`;

const Title = styled.h1`
    font-family: Verdana;
    font-size: 32px;
`;  
const AddButton = styled.button`
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 18px;
    font-size: 24px;
    float: right;
    cursor: pointer;
`;

const Products = () => {
    const {data, loading, onDelete} = useAPI("/products");

    const editProduct = () => {
        return(
            console.log("edit")
        )
    }
    
    return(
        <Wrapper>
            <Title>Products</Title>
            <Link to={"/products/add"}><AddButton>Add</AddButton></Link>
            {loading && <div>Loading...</div>}
            {!loading && data && 
                <ProductList products={data} delProduct={onDelete} editProduct={editProduct}/>
            }
        </Wrapper>
    );
}

export default Products;