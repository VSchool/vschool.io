import React from 'react';
import Hero from './Hero';
import Steps from './Steps';
import Courses from './Courses';
import { gray } from "@vschool/lotus"
import styled from "styled-components"


const PageContainer = styled.div`
    background: ${gray.lighter};
`

const Success = () => {
    return (
        <PageContainer>
            <Hero />
            <Steps />
            <Courses />
        </PageContainer>
    );
};

export default Success;