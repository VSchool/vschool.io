import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import {
    white,
    green,
    gray,
    blue,
    CardGroup,
    Card,
    TextButton,
} from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Section = styled.section`
    margin-top: -257px;
    padding-top: 257px;
    padding-bottom: 98px;

    @media (min-width: 1000px) {
        margin-top: 0;
        padding-top: 160px;
        padding-bottom: 160px;
    }
`

const FlexCard = styled(Card)`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const Title = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    max-width: 762px;
`

const Subtitle = styled.h6`
    text-align: center;
    margin-bottom: 64px;
    color: ${green.dark};
`

const Icon = styled.img`
    width: 64px;
`

const Name = styled.h5`
    margin-bottom: 16px;
`

const Summary = styled.p`
    color: ${gray.darker};
    margin-bottom: 16px;
    font-size: 14px;

    @media (min-width: 800px) {
        font-size: 16px;
    }
`

const StyledLink = styled(Link)`
    font-size: 14px;
    line-height: 16px;
    color: ${blue.base};
    margin-top: auto;
    font-weight: bold;
`

export default function CurrentScholarships() {
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipsIntroPage {
                data {
                    scholarships_title {
                        text
                    }
                    scholarships_subtitle {
                        text
                    }
                }
            }
            allPrismicScholarshipPage(
                filter: { data: { active: { eq: true }, public: { eq: true } } }
            ) {
                edges {
                    node {
                        data {
                            active
                            public
                            scholarship_name {
                                text
                            }
                            summary {
                                text
                            }
                            icon {
                                alt
                                url
                            }
                        }
                        uid
                    }
                }
            }
        }
    `)
    const {
        scholarships_title: { text: title },
        scholarships_subtitle: { text: subtitle },
    } = data.prismicScholarshipsIntroPage.data

    const currentList = data.allPrismicScholarshipPage.edges
        .map(item => item.node)
        .map(item => (
            <FlexCard
                key={item.uid}
                onClick={() => navigate(`/scholarships/${item.uid}`)}
            >
                <Icon src={item.data.icon.url} alt={item.data.icon.alt} />
                <Name>{item.data.scholarship_name.text}</Name>
                <Summary>{item.data.summary.text}</Summary>
                <StyledLink to={`/scholarships/${item.uid}`}>
                    <TextButton>Learn More</TextButton>
                </StyledLink>
            </FlexCard>
        ))
    return (
        <Section>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <CardGroup>{currentList}</CardGroup>
        </Section>
    )
}
