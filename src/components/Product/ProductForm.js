import styled from 'styled-components';
import Button from '../../components/Button';

const Label = styled.label`
    font-size: 20px;
`;

const Input = styled.input`
    margin: 20px 0px;
    padding: 12px 20px;
    font-size: 20px;
    width: 100%;
    border-radius: 5px;
`;  

const ProductForm = ({onSubmit, formFields}) => {

    return(
        <form onSubmit={onSubmit}>
            {formFields.map((field) => {
                return(
                    <div>
                        <Label>{field.label}</Label>
                        <Input key={field.name} name={field.name} type={field.type} value={field.value} placeholder={field.label+'..'} onChange={field.onChange} required={field.required} min={field.min}/>
                    </div>
                )
            })}
          
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default ProductForm;