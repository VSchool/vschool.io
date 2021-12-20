import React, {useState} from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding: 64px 40px;

    @media (min-width: 800px) {
        padding: 96px 80px;
        height: 570px;
        margin-bottom: 116px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 24px;
    }
`

const Subtitle = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.dark};
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`

const Description = styled.p`
    font-weight: 300;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 64px;
    max-width: 700px;
    font-size: 20px;
    line-height: 24px;

    @media (min-width: 800px) {
        font-size: 24px;
        line-height: 32px;
    }
`

const Image = styled.img`
    width: 100%;

    @media (min-width: 800px) {
        max-width: 620px;
    }
`

export default function BackgroundInfoForm() {
    const [status, setStatus] = useState(localStorage.getItem('status') || 'foreign')
    const data = useStaticQuery(graphql`
        {
            prismicScholarshipsBackgroundInfoForm {
                data {
                    unavailable_description {
                        text
                    }
                    unavailable_image {
                        url
                    }
                    unavailable_subtitle {
                        text
                    }
                    unavailable_title {
                        text
                    }
                    later_description {
                        text
                    }
                }
            }
        }
    `)

    const {
        unavailable_description: { text: desc},
        unavailable_image: { url },
        unavailable_subtitle: { text: sub},
        unavailable_title: { text: title},
        later_description: { text: later_desc }
    } = data.prismicScholarshipsBackgroundInfoForm.data

    return (
        <Container>
            <Subtitle>{sub}</Subtitle>
            <Title>{title}</Title>
            <Description>{status === 'foreign' ? desc : later_desc}</Description>
            <Image src={url} />
        </Container>
    )
}
