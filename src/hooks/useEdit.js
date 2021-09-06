import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:3001/products/';

const useEdit = (productId) => {
    const initialState = {
        productName: "",
        unitPrice: "",
        thumbnail: "",
        category: "",
        description: "",
    };

    const [product, setProduct] = useState(initialState);

    const {productName, unitPrice, thumbnail, category, description} = product;

    const handleChange = ({ target: { value, name } }) => {
        setProduct({ ...product, [name]: value });
    };

    useEffect(() => {
        if(productId > 0){
            axios.get(BASE_URL + productId).then(res =>{
                setProduct(res.data);
            });
        }
    }, [productId]);

    const formFields = [ 
        {label: "Product Name", name: "productName", type: "text", required: true, value: productName, onChange: handleChange},
        {label: "Unit Price", name: "unitPrice", type: "number", required: true, value: unitPrice, onChange: handleChange, min: 1},
        {label: "Thumbnail", name: "thumbnail", type: "text", required: true, value: thumbnail, onChange: handleChange},
        {label: "Category", name: "category", type: "text", required: true, value: category, onChange: handleChange},
        {label: "Description", name: "description", type: "text", required: true, value: description, onChange: handleChange}
    ];


    const createProduct =  () => {
        axios.post("http://localhost:3001/products", {
            productName: productName,
            unitPrice: unitPrice,
            thumbnail: thumbnail,
            category: category,
            description: description,
        }).then(res => {
        })
    }

    const productUpdate = (productId, values) => {
        axios.put("http://localhost:3001/products/" + productId, values).then(
            res => {
            }
        )
    }

    return {product, setProduct, createProduct, productUpdate, formFields};

}

export default useEdit;