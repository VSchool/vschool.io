import React from "react"
import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"
import { gray, blue, Button } from "@vschool/lotus"
import HeroLayout from "../shared/HeroLayout"

const Container = styled.section`
    /* props.theme is coming from the styled-components 
    theme context provided in templates/scholarship.js */
    background-color: ${props => props.theme.primary.lightest};
    padding-top: 74px;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 96px;
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`

const CardImage = styled.img`
    position: absolute;
    right: 22px;
    bottom: 42px;
    width: 180px;
`

const Title = styled.h1`
    margin-bottom: 16px;
    font-size: 45px;
`

const Text = styled.p`
    color: ${gray.darker};
    margin-bottom: 24px;
`

const Amount = styled.h6`
    color: ${blue.dark};
    margin-bottom: 44px;
`

const StyledButton = styled(Button)`
    width: 100%;
    margin-bottom: 64px !important;

    @media (min-width: 600px) {
        width: 232px;
    }
`

export default function Hero(props) {
    const {
        hero_title: { text: title },
        hero_text: { text },
        hero_scholarship_amount: { text: amount },
        hero_image: { url: mainImageUrl, alt: mainImageAlt },
        hero_card_image: { url: cardImageUrl, alt: cardImageAlt },
        hero_button_text: { text: buttonText },
        deadlinePast,
    } = props

    return (
        <Container>
            <HeroLayout
                text={
                    <>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                        <Amount>{amount}</Amount>
                        <ScrollLink
                            to="application-form"
                            smooth={true}
                            offset={-320}
                        >
                            {!deadlinePast && (
                                <StyledButton size="xl">
                                    {buttonText}
                                </StyledButton>
                            )}
                        </ScrollLink>
                    </>
                }
                image={
                    <ImageContainer>
                        <img src={mainImageUrl} alt={mainImageAlt} />
                        <CardImage src={cardImageUrl} alt={cardImageAlt} />
                    </ImageContainer>
                }
            />
        </Container>
    )
}
