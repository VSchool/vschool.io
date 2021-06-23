import React from 'react'
import Hero from './Hero'
import Info from './Info'
import Career from './Career'
import Start from './Start'
import Partners from './Partners'
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
           <Career />
           <Start />
           <Partners />
        </PageContainer>
    )
}