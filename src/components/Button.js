import styled from 'styled-components';

const Button = styled.button`
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    background: #000000;
    padding: 12px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
`;

export default Button;