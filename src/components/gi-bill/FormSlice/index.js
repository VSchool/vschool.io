import React from 'react'
import styled from 'styled-components'
import { blue } from '@vschool/lotus'

const SliceContainer = styled.div`
    background: ${blue.lightest};
`

export default function index() {
    console.log(blue)

    return (
        <SliceContainer>
            <p>{'Form Slice'}</p>
        </SliceContainer>
    )
}
