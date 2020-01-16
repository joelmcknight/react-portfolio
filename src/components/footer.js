import React from 'react';
import styled from 'styled-components'

import '../App.css';

const StyledFooter = styled.div`
    display:flex;
    justify-content: flex-end;
    background-color: #222;
    height: 60px;
    padding: 0 20px;
    color: white;
`;

const Copywrite = styled.div`
    padding: 20px;
`;

const Footer = () => {
    return (
        <StyledFooter >
            <Copywrite>© Joel McKnight 2020</Copywrite>
        </StyledFooter>
    )
}

export default Footer