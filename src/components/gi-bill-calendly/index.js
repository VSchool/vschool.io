import React from 'react'
import styled from 'styled-components'
import Schedule from './Schedule'
import { gray } from '@vschool/lotus'

const PageContainer = styled.div`
  background: ${gray.lighter};
`

export default function GiBillCalendly() {

    return (
        <PageContainer>
            <Schedule />
        </PageContainer>
    )
}