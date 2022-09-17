import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import HeroLayout from "../shared/HeroLayout"
import { navigate } from "gatsby"
import { gray, red, blue, Button } from "@vschool/lotus"


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
    font-size: 32px;
    line-height: 40px;

    @media (min-width: 800px){
        font-size: 44px;
        line-height: 48px;
    }
`

const HeroDescription = styled.p`
    margin: 12px 0 24px 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
    color: ${gray.darker};
    max-width: 445px;

    @media (min-width: 800px){
        font-size: 24px;
        line-height: 32px;
        margin: 24px 0 48px 0;
    }
`

const HeroSubdescription = styled.p`
    margin: 12px 0 24px 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    color: ${gray.darker};
    max-width: 445px;

    @media (min-width: 800px){
        font-size: 16px;
        line-height: 24px;
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

const ImageContainer = styled.div`
    margin-top: 100px;

    @media (min-width: 800px) {
        margin-right: 50px;
        margin-top: 0;
    }
`


export default function Scholarship() {
    const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
          scholarship_button {
            text
          }
          scholarship_description {
            text
          }
          scholarship_img {
            url
            alt
          }
          scholarship_subdescription {
            text
          }
          scholarship_subtitle {
            text
          }
          scholarship_title {
            text
          }
        }
      }
    }
    `)

  const {
    scholarship_title: { text: heroTitle},
    scholarship_subtitle: { text: heroSubtitle},
    scholarship_description: { text: heroDescription},
    scholarship_subdescription: {text: heroSubdescription },
    scholarship_button: { text: buttonText},
    scholarship_img: { url: heroImageUrl, alt: heroImageAlt},
  } = {...data.prismicVeteransLandingPage.data}


    return (
        <section>
            <ContentContainer>
                    <HeroLayout
                        text={
                            <div style={{paddingLeft: 10}}>
                                <div>
                                    <BlueSubtext>{heroSubtitle}</BlueSubtext>
                                    <HeroTitle>{heroTitle}</HeroTitle>
                                </div>
                                <HeroDescription>{heroDescription}</HeroDescription>
                                <HeroSubdescription>{heroSubdescription}</HeroSubdescription>
                                <Button onClick={() => navigate('/scholarships/military-family-full-ride-scholarship')}>{buttonText}</Button>
                            </div>
                        }
                        image={
                          <ImageContainer>
                              <img
                                  src={heroImageUrl}
                                  alt={heroImageAlt}
                                  style={{marginRight: 10}}
                              />
                          </ImageContainer>
                        }
                        direction={'row-reverse'}
                    />
            </ContentContainer>
        </section>
    )
}
