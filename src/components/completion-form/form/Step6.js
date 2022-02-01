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
    max-width: 620px;
    @media (min-width: 800px) {
        padding: 0px 0px 160px;
    }
`

const Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 48px;
    max-width: 630px;

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

const StyledButton = styled(Button)`
    margin: 0 12px;
    color: ${props => props.color ? gray.lightest : gray.darker};
    background-color: ${props => props.color ? gray.darker : gray.lightest};
`

const Step6 = ({submit}) => {
    const handleSubmit = () => {
        alert('final submission!!')
    }
    
    return (
        <Container>
            <h1>Step 6</h1>
            <Paragraph>Next: Post your reviews to receive a <span>$50 Amazon Gift Card</span></Paragraph>
            <div style={{textAlign: 'center', marginBottom: 40 }}>
                <img src="https://imgr.search.brave.com/RHVzALn2Fvvzh2Tw8CA_uK1zvG6gIgqVyk5N4uWa_5c/fit/478/297/ce/1/aHR0cDovL2NvbnNl/cnZhbW9tZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MDEvMTM3NDgxYW1h/em9uanBnMTM3NDUx/MzQzOC5qcGc"  style={{width: 280}} />
            </div>
            <div>
                <StyledButton>No, Thanks</StyledButton><StyledButton color="white" onClick={handleSubmit}>Post Reviews</StyledButton>
           </div>
        </Container>
    );
};

export default Step6;