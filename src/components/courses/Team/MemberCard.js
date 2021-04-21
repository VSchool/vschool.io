import React from 'react'
import styled from 'styled-components'

const MemberCardContainer = styled.div`
    border: 2px solid green;

    & > p {
        margin: 0px;
        color: red;
    }
`

export default function MemberCard(props) {
    console.log(1111, props)
    return (
        <MemberCardContainer>
            <p>{'Card'}</p>
        </MemberCardContainer>
    )
}
