import React from 'react';
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"
import heroImg from '../../images/hero_image.png'

const HeroContainer = styled.section`
    padding-top: 112px;
    padding-bottom: 112px;
    background: ${blue.lightest};
    height: 600px;

    @media (min-width: 800px){
        height: 800px;
    }
`

const Subtitle = styled.p`
    color: ${blue.darker};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;

    @media (min-width: 800px){
        font-size: 16px;
        line-height: 24px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    color: ${gray.darkest};
    margin-bottom: 32px;

    @media (min-width: 800px){
        font-size: 56px;
        line-height: 56px;
    }
`
const Description = styled.p`
    color: ${gray.darker};
    max-width: 664px;
    text-align: center;
    margin-bottom: 100px;
    font-size: 16px;
    line-height: 24px;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 96px;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 675px;
`

const Hero = () => {
    
    return (
        <HeroContainer>
            <Subtitle>VETERANS AT VSCHOOL</Subtitle>
            <Title>Call Scheduled!</Title>
            <Description>A confirmation email will be sent shortly. We look forward to hearing your story and helping you acheive a future career in tech.</Description>
            <Image src={heroImg} alt="Man Smiling and Code"/>
        </HeroContainer>
    );
};

export default Hero;