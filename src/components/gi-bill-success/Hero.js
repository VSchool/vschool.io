import React from 'react';
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"
import heroImg from '../../images/hero_image.png'

const HeroContainer = styled.section`
    padding-top: 112px;
    padding-bottom: 112px;
    background: ${blue.lightest};
    height: 800px;
`

const Subtitle = styled.p`
    color: ${blue.darker};
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 56px;
    line-height: 56px;
    color: ${gray.darkest};
    margin-bottom: 32px;
`
const Description = styled.p`
    font-size: 20px;
    line-height: 32px;
    color: ${gray.darker};
    max-width: 664px;
    text-align: center;
    margin-bottom: 200px;
`

const Hero = () => {
    
    return (
        <HeroContainer>
            <Subtitle>VETERANS AT VSCHOOL</Subtitle>
            <Title>Information Submitted!</Title>
            <Description>Thanks for you interest in V School. We'll reach out to you to discuss opportunities and your pathway into tech. You'll be receiving your next steps email shortly.</Description>
            <img src={heroImg} alt="Man Smiling and Code"/>
        </HeroContainer>
    );
};

export default Hero;