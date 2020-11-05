import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ComparisonsTable from "./ComparisonsTable.js"
import { gray, black, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 56px;
    padding-top: 96px;

    @media (min-width: 1200px) {
        padding-bottom: 96px;
        padding-top: 96px;
    }
`

const Header = styled.h2`
    color: ${black};
    font-size: 32px;
    line-height: 38px;
    font-weight: 800;
    text-align: center;
    width: 250px;
    margin-bottom: 32px;

    @media (min-width: 600px) {
        font-size: 44px;
        line-height: 48px;
        width: 100%;
    }
`

const SubHeader = styled.h5`
    font-size: 14px;
    line-height: 20px;
    color: ${blue.base};
    width: 250px;
    margin-bottom: 64px;
    text-align: center;

    @media (min-width: 600px) {
        width: 100%;
    }
`

export default function SchoolComparisons(props) {
    const data = useStaticQuery(graphql`
    {
        prismicMethodologyPage {
            id
            data {
            comparison_header {
                text
            }
            comparison_subheader {
                text
            }
            comparisons {
                experience {
                text
                }
                icon {
                url
                }
                job {
                text
                }
                skills {
                text
                }
                theory {
                text
                }
                type {
                text
                }
            }
            }
        }
        }
    `)

    const {
        comparisons,
        comparison_subheader: { text: comparisonsSubheader },
        comparison_header: { text: comparisonsHeader }
    } = data.prismicMethodologyPage.data

    return (
        <Container>
            <Header>{comparisonsHeader}</Header>
            <SubHeader>{comparisonsSubheader}</SubHeader>
            <ComparisonsTable comparisons={comparisons} />
        </Container>
    )
}
