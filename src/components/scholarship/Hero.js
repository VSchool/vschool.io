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
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 32px;    
    }
`

const Amount = styled.h6`
    margin-bottom: 44px;  
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;  
    color: ${blue.dark};

    @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 24px;    
    }
`

const StyledButton = styled(Button)`
    margin-bottom: 64px;
    width: 100%;

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
