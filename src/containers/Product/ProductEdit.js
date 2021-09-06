import styled from 'styled-components';
import { useLocation, useParams } from "react-router-dom";
import BaseContainer from '../../components/Container';
import ProductForm from "../../components/Product/ProductForm";
import useEdit from '../../hooks/useEdit';

const Container = styled(BaseContainer)`
    padding-top: 38px;
    padding-bottom: 38px;
`;

const Title = styled.h1`
    font-family: Verdana;
    font-size: 32px;
`; 

const ProductEdit = () => {
    let location = useLocation();
    const { productId } = useParams(); 

    const {product, createProduct, productUpdate, formFields} = useEdit(productId);

    return(       
        <Container>
            {location.pathname.indexOf("add") > 0 &&
            <div>
                <Title>Add Product</Title>
                <ProductForm onSubmit={createProduct} formFields={formFields}/>
            </div>
            }
            {location.pathname.indexOf("edit") > 0 &&
            <div>
                <Title>Edit Product</Title>
                <ProductForm onSubmit={() => productUpdate(productId, product)} formFields={formFields}/>
            </div>
            }

        </Container>
    )
}

export default ProductEdit;