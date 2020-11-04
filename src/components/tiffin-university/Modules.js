import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray } from "@vschool/lotus"
import Module from "./Module.js"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-top: 56px;
    padding-bottom: 160px;

    @media (min-width: 320px) and (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1200px) {
        padding-top: 96px;
        padding-bottom: 240px;
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

export default function Modules() {
        const data = useStaticQuery(graphql`
        {
            prismicTiffin {
                data {
                    modules {
                        module_title {
                            text
                        }
                        module_sub {
                            text
                        }
                        subject1 {
                            text
                        }
                        subject2 {
                            text
                        }
                        subject3 {
                            text
                        }
                        subject4 {
                            text
                        }
                        subject5 {
                            text
                        }
                    }
                }
            }
        }
    `)

    const { modules } = data.prismicTiffin.data

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
