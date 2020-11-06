import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray, black, Button } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding-top: 64px;
    padding-bottom: 96px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        max-width: 700px;
    }
`

const Subtitle = styled.h6`
    color: ${blue.dark};
    margin-bottom: 12px;
`

const Title = styled.h1`
    color: ${black};
    margin-bottom: 24px;

    @media (min-width: 800px) {
        margin-bottom: 32px;
    }
`

const Text = styled.p`
    margin-bottom: 48px;
    color: ${gray.darker};

    @media (min-width: 800px) {
        margin-bottom: 64px;
    }
`

const Image = styled.img`
    width: 100%;
    margin-bottom: 48px;
`

const StyledButton = styled(Button)`
    width: 100%;
    display: block;
    margin-bottom: 96px;

    @media (min-width: 600px) {
        width: 319px;
    }
`

const StyledLink = styled(Link)`
    align-self: center;
`

export default function Thanks() {
    const data = useStaticQuery(graphql`
        {
            prismicDigitalFamilyPage {
                data {
                    thanks_header {
                        text
                    }
                    thanks_subtitle {
                        text
                    }
                    thanks_text {
                        text
                    }
                    thanks_image {
                        alt
                        url
                    }
                    thanks_button_text {
                        text
                    }
                }
            }
        }
    `)

    const {
        thanks_header: { text: header },
        thanks_subtitle: { text: subtitle },
        thanks_text: { text },
        thanks_image: { url: imageUrl, alt: imageAlt },
        thanks_button_text: { text: buttonText },
    } = data.prismicDigitalFamilyPage.data
    return (
        <Container>
            <ContentContainer>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{header}</Title>
                <Text>{text}</Text>
                <Image src={imageUrl} alt={imageAlt} />
                <StyledLink to={"/"}>
                    <StyledButton size="lg">{buttonText}</StyledButton>
                </StyledLink>
            </ContentContainer>
        </Container>
    )
}
