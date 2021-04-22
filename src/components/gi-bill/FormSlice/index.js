import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import { blue, red, gray } from '@vschool/lotus'

const SliceContainer = styled.div`
    padding: 64px 88px 112px 88px;
    background: ${blue.lightest};

    & > .sub-heading {
        color: ${red.dark};
        font-family: 'Aktiv Grotesk Ex';
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        // border: 1px dotted orange;
    }

    & > .heading {
        margin-top: 8px;
        font-family: 'Aktiv Grotesk';
        font-weight: 900;
        font-size: 56px;
        line-height: 56px;
        color: ${gray.darkest};
        // border: 1px dotted orange;
    }  
`

export default function index(props) {
    const {
        sliceHeader,
        formHeading,
        buttonText
    } = props

    return (
        <SliceContainer>
            <p className={'sub-heading'}>{sliceHeader.subHeading}</p>
            <p className={'heading'}>{sliceHeader.heading}</p>
            <Form heading={formHeading} buttonText={buttonText} />
        </SliceContainer>
    )
}
