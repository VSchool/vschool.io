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

const GiBill = styled.div`
    display: flex;
    padding: 32px 0;
`

const GiBillImg = styled.img`
    width: 30px;
    margin-right: 10px;
`

const StatContainer = styled.div`
  	display: flex;
    height: 120px;
    padding-top: 40px;
    width: 90%;
    justify-content: space-between;
`

const StatBox = styled.div`
    border-left: 3px solid ${gray.darker};
    padding: 3px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StatNum = styled.p`
	font-weight: 900;
	font-size: 44px;
	line-height: 48px;
	color: ${gray.darkest};
`

const StatText = styled.p`
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.5px;
	color: ${gray.darker};
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
          hero_gi_bill {
            text
          }
          hero_green_checkmark {
            url
            alt
          }
          hero_image {
            url
            alt
          }
          hero_success_num {
            text
          }
          hero_success_rate {
            text
          }
          hero_salary_num {
            text
          }
          hero_salary_rate {
            text
          }
        }
      }
    }
  `)

  const {
    hero_title: { text: heroTitle},
    hero_subtitle: { text: heroSubtitle},
    hero_description: { text: heroDescription},
    hero_gi_bill: {text: heroGi },
    hero_green_checkmark: { url: greenUrl },
    hero_form_button: { text: buttonText},
    hero_form_icon: {
      alt: iconAlt,
      url: iconUrl
    },
    hero_image: { url: heroImageUrl, alt: heroImageAlt},
    hero_success_num: { text: heroSuccessNum },
    hero_success_rate: { text: heroSuccessRate },
    hero_salary_num: { text: heroSalaryNum },
    hero_salary_rate: { text: heroSalaryRate }
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
                                <GiBill>
                                  <GiBillImg src={greenUrl} />
                                  <p>{heroGi}</p>
                                </GiBill>
                            </>
                        }
                        image={
                          <>
                              <img
                                  src={heroImageUrl}
                                  alt={heroImageAlt}
                              />
                              <br/>
                              <StatContainer>
                                <StatBox>
                                  <StatNum>{heroSuccessNum}</StatNum>
                                  <StatText>{heroSuccessRate}</StatText>
                                </StatBox>
                                <StatBox>
                                  <StatNum>{heroSalaryNum}</StatNum>
                                  <StatText>{heroSalaryRate}</StatText>
                                </StatBox>
                              </StatContainer>
                          </>
                        }
                        direction={'column'}
                    />
            </ContentContainer>
        </HeroContainer>
    )
}
