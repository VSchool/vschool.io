import React from "react"
import styled from "styled-components"
import { gray } from "@vschool/lotus"
import Module from "./Module.js"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1200px) {
        padding-right: 96px;
        padding-left: 96px;
        padding-top: 96px;
    }
`

const ModulesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 64px;
    }

    @media (min-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 96px;
    }
`

export default function Modules(props) {
    const { modules } = props
    return (
        <Container>
            <ModulesContainer>
                {modules.map(m => (
                    <Module {...m} key={m.module_sub.text} />
                ))}
            </ModulesContainer>
        </Container>
    )
}
