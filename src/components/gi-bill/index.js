import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Scholarship from './Scholarship'
import Outcomes from './Outcomes'
import Courses from './Courses'
import AdditionalResources from './AdditionalResources'
import Success from './Success'
import Footer from './Footer'
import { gray } from '@vschool/lotus'

const PageContainer = styled.div`
  background: ${gray.lighter};
`

export default function GiBillPage() {

    return (
        <PageContainer>
            <Hero />
            <Scholarship />
            <Outcomes  />
            <Success />
            <Courses />
            <AdditionalResources />
            <Footer  />
        </PageContainer>
    )
}