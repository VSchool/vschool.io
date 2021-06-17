import React from 'react'
import Hero from './Hero'
import Info from './Info'
import styled from 'styled-components'
import { gray } from '@vschool/lotus'

const PageContainer = styled.div`
  background: ${gray.lighter};
`

export default function PreCourse() {
    return (
        <PageContainer>
           <Hero />
           <Info />
        </PageContainer>
    )
}