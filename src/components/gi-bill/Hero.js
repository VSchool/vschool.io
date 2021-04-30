import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import HeroLayout from "../shared/HeroLayout"
import Form from "./Form"
import { gray, red, blue } from "@vschool/lotus"

const HeroContainer = styled.section`
    background: ${blue.lightest};
`

const ContentContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 64px 0;

    @media (min-width: 800px){
        padding: 90px 0;
    }
`

const HeroTitle = styled.h1`
    font-weight: 900;
    color: ${gray.darkest};
    margin-bottom: 24px;
    font-size: 44px;
    line-height: 48px;

    @media (min-width: 800px){
        line-height: 56px;
        font-size: 56px;
        margin-bottom: 16px;
    }
`

const HeroDescription = styled.p`
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    color: ${gray.darker};

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 16px;
    }
`

const HeroSubtitle = styled.p`
    font-weight: 800;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${red.dark};
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 800px){
        font-size: 16px;
        line-height: 24px;
    }
`

export default function Hero() {
const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
          hero_title {
            text
          }
          hero_subtitle {
            text
          }
          hero_description {
            text
          }
          hero_form {
            hero_form_label {
              text
            }
            hero_form_placeholder {
              text
            }
          }
          hero_form_button {
            text
          }
          hero_image {
            url
            alt
          }
        }
      }
    }
  `)

  const {
    hero_title: { text: heroTitle},
    hero_subtitle: { text: heroSubtitle},
    hero_description: { text: heroDescription},
    hero_form,
    hero_form_button: { text: buttonText},
    hero_image: { url: heroImageUrl, alt: heroImageAlt},
  } = {...data.prismicVeteransLandingPage.data}

    return (
        <HeroContainer>
            <ContentContainer>
                
                    <HeroLayout
                        text={
                            <>
                                <div>
                                    <HeroSubtitle>{heroSubtitle}</HeroSubtitle>
                                    <HeroTitle>{heroTitle}</HeroTitle>
                                </div>
                                <HeroDescription>
                                    {heroDescription}
                                </HeroDescription>
                                <Form formInfo={hero_form} buttonText={buttonText} type='hero' />
                            </>
                        }
                        image={
                            <img
                                src={heroImageUrl}
                                alt={heroImageAlt}
                            />
                        }
                    />
            </ContentContainer>
        </HeroContainer>
    )
}
