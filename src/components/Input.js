  
import styled from 'styled-components';

const Label = styled.label`
  font-size: 24px;
  margin-bottom: 16px;
  display: block;
`;

const InputComponent = styled.input`
  border-radius: 8px;
  text-align: center;
  height: 60px;
  width: 80px;
  font-size: 20px;
`;

const Input = ({ type, label, className, ...restProps }) => {
    return(
        <div>
            {label && <Label>{label}</Label>}
            <InputComponent type={type} {...restProps} />
        </div>
    )
}

export default Input;