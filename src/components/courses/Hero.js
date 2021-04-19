import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroLayout from "../shared/HeroLayout"
import styled from "styled-components"
import Link from "../shared/QueryLink"
import { gray, Button } from "@vschool/lotus"

const Container = styled.section`
    /* props.theme is coming from the styled-components 
    theme context provided in templates/scholarship.js */
    background-color: ${props => props.theme.primary.lightest};
    padding-top: 74px;
    padding-bottom: 74px;
    height: 900px;

    @media (min-width: 800px) {
        padding-top: 96px;
        height: 100%;
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`

const Title = styled.h1`
    margin-bottom: 16px;
`

const Text = styled.p`
    color: ${gray.darker};
    margin-bottom: 24px;
`

const StyledButton = styled(Button)`
    width: 100%;
    margin-bottom: 64px !important;

    @media (min-width: 600px) {
        width: 232px;
    }
`

const Hero = props => {

    const {
        hero_button_text: { text: buttonText },
        hero_button_url: { url: btnURL },
        hero_image: { url: mainImageUrl, alt: mainImageAlt },
        hero_text: { text },
        hero_title: { text: title },
    } = props

    return (
        <Container>
            <HeroLayout
                text={
                    <>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                        <Link to={btnURL}>
                            <StyledButton size="xl">{buttonText}</StyledButton>
                        </Link>
                    </>
                }
                image={
                    <ImageContainer>
                        <img src={mainImageUrl} alt={mainImageAlt} />
                    </ImageContainer>
                }
            />
        </Container>
    )
}

export default Hero
