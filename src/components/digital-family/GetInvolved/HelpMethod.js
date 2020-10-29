import React from "react"
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const Container = styled.div`
    margin-bottom: 48px;
    flex-basis: calc(100% / 3);

    @media (min-width: 800px) {
        padding: 0 20px;
    }
`

const Title = styled.h4`
    margin-bottom: 24px;
`

const Ul = styled.ul`
    list-style: none;
`

const Option = styled.li`
    color: ${gray.darker};
    border-left: 2px solid ${blue.base};
    margin-bottom: 16px;
    padding-left: 16px;
    font-size: 14px;
    line-height: 18px;
`

export default function HelpMethod({ method }) {
    const title = method.primary.method_title.text
    const options = method.items.map(item => (
        <Option key={item.method_option.text}>{item.method_option.text}</Option>
    ))

    return (
        <Container>
            <Title>{title}</Title>
            <Ul>{options}</Ul>
        </Container>
    )
}
