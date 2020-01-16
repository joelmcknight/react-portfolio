import React from 'react';
import styled from 'styled-components';

import reactLogo from '../images/logo.svg';
import styledComponentsLogo from '../images/styled-componentsicon.png';
import '../App.css';

const Splash = () => {
    return (
        <SplashBody >
            <SplashHeading>
                <span>Hi, I'm Joel McKnight</span>
                <SubHeading>Front End Developer</SubHeading>
                <SubHeading>Toronto</SubHeading>
            </SplashHeading>
            <ImageHolder>
                <StyledSvg src={reactLogo} className="App-logo" alt="react logo" />
                <StyledSvg src={styledComponentsLogo} className="App-logo" alt="styled components logo" />
            </ImageHolder>
        </SplashBody>
    )
}

const SplashBody = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #333;
    height: 500px;
    color: white;
`;

const SplashHeading = styled.h1`
    max-width: 510px;
    display: flex;
    flex-direction: column;
`;

const SubHeading = styled.span`
    font-size: 24px;
`;

const StyledSvg = styled.img`
    height: 100px;
    width: 100px;
`;

const ImageHolder = styled.div`
    display: flex;
`;

export default Splash