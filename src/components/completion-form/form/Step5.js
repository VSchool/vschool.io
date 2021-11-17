import React, { useState, useEffect, useContext } from "react"
import { Context } from "../FormContext"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
    gray,
    Button
} from "@vschool/lotus"


const Container = styled.div`
    background-color: ${gray.lighter};
    padding: 0px 0px 64px;
    width: 620px;
    position: relative;
    top: -12px;

    @media (min-width: 800px) {
        top: -40px;
        padding: 0px 0px 160px;
    }
`

const Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 24px;
    max-width: 700px;

    & > span {
        font-weight: 800;
        display: block;
    }

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 64px;
    }
`

const ReviewHeader = styled.p`
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: ${gray.darkest};

    @media (min-width: 800px){
        font-size: 12px;
        line-height: 16px;
    }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 32px;
`

const LinkIcon = styled.img`
    width: 20px;
    position: relative;
    top: 3px;
`

const StyledButton = styled(Button)`
    margin: 0 12px;
    color: ${props => props.color ? gray.lightest : gray.darker};
    background-color: ${props => props.color ? gray.darker : gray.lightest};
`


const Step5 = ({submit}) => {
    const handleSubmit = () => {
        submit(6)
    }
    
    return (
        <Container>
            <Paragraph style={{fontSize: 14}}>* Gift cards will only be sent to those who leave reviews at all the listed sites.</Paragraph>
            <ReviewHeader>Leave a review at all these sites to recieve a $50 Amazon Gift Card</ReviewHeader>
            <LinkContainer>
                <Logo src="https://imgr.search.brave.com/IAoXImc_V8UEYAhPuD22iI9uK9Z7jbiTN0mqsZdXqfE/fit/980/980/ce/1/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2NvdXJzZV9yZXBv/cnRfc3RhZ2luZy9D/Ul9Mb2dvX0NpcmNs/ZS5wbmc" />
                <a>Leave a Review <LinkIcon src="https://imgr.search.brave.com/w8XQGRLTz9eR5Yv4qiWCxQXqH2NgLQu2tpPAd4YsBNc/fit/1200/1200/ce/1/aHR0cHM6Ly9tYXhj/ZG4uaWNvbnM4LmNv/bS9TaGFyZS9pY29u/L3AxZW0vVmVyeV9C/YXNpYy9leHRlcm5h/bF9saW5rMTYwMC5w/bmc" /></a>
            </LinkContainer>
            <div style={{textAlign: "center"}}>
                <StyledButton>No, Thanks</StyledButton><StyledButton color="white" onClick={handleSubmit}>Post Reviews</StyledButton>
           </div>
        </Container>
    );
};

export default Step5;