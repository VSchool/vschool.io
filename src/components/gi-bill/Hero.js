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
    font-size: 44px;
    line-height: 48px;

    @media (min-width: 800px){
        line-height: 56px;
        font-size: 56px;
    }
`

const HeroDescription = styled.p`
    margin: 12px 0 24px 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    color: ${gray.darker};
    max-width: 445px;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
        margin: 24px 0 48px 0;
    }
`


const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding: 8px 0;

    @media (min-width: 800px) {
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
          hero_form_icon {
            alt
            url
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
    // hero_gi_bill,
    // hero_green_checkmark: { url: greenUrl },
    hero_form_button: { text: buttonText},
    hero_form_icon: {
      alt: iconAlt,
      url: iconUrl
    },
    hero_image: { url: heroImageUrl, alt: heroImageAlt},
  } = {...data.prismicVeteransLandingPage.data}
  console.log(data.prismicVeteransLandingPage.data)
    return (
        <HeroContainer>
            <ContentContainer>
                
                    <HeroLayout
                        text={
                            <>
                                <div>
                                    <BlueSubtext>{heroSubtitle}</BlueSubtext>
                                    <HeroTitle>{heroTitle}</HeroTitle>
                                </div>
                                <HeroDescription>
                                  Use your G.I. Bill® to learn to <b>code</b> or <b>design</b> and land a job in tech. Talk with us today to learn more.
                                </HeroDescription>
                                {/* <Form formInfo={hero_form} buttonText={buttonText} type='hero' icon={{iconAlt, iconUrl}} /> */}
                                <Form icon={{iconAlt, iconUrl}} buttonText={buttonText} />
                                <div>
                                  {/* <img src={greenUrl} /> */}
                                  {/* <p>{heroGi}</p> */}
                                </div>
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
