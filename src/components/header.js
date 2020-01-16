import React from 'react';
import styled from 'styled-components'

// import logo from '../images/logo.svg';
import '../App.css';

const StyledHeader = styled.div`
    display:flex;
    justify-content: space-between;
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

const StyledMenuWrap = styled.div`
    padding: 20px;
`;

const Header = () => {
    return (
        <StyledHeader >
            <h2>Joel McKnight - Front End Developer</h2>

            <StyledMenuWrap>Home / Portfolio / Github / Contact Me </StyledMenuWrap>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </StyledHeader>
    )
}

export default Header