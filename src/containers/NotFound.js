import styled from 'styled-components';

import BaseContainer from '../components/Container';

const Container = styled(BaseContainer)`
    padding-top: 38px;
    padding-bottom: 38px;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 100px;
`;

const Detail = styled.p`
    font-size: 24px;
`;

const NotFound = () => {
    return(
        <Container>
            <Title>404</Title>
            <h1>Not Found</h1>
            <Detail>The requested URL was not found on this server.</Detail>
        </Container>
    );
}

export default NotFound;