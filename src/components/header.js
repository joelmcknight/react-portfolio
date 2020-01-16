import React from 'react';
import styled from 'styled-components'

// import logo from '../images/logo.svg';
import '../App.css';

const StyledHeader = styled.div`
    display:flex;
    justify-content: flex-end;
    background-color: #222;
    height: 60px;
    padding: 0 20px;
    color: white;
`;

const StyledMenuWrap = styled.div`
    padding: 20px;
`;

const Header = () => {
    return (
        <StyledHeader >
            <StyledMenuWrap>Home / Portfolio / Github / Contact Me </StyledMenuWrap>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </StyledHeader>
    )
}

export default Header