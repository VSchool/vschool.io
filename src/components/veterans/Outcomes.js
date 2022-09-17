import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, blue } from "@vschool/lotus"

const OutcomesContainer = styled.section`
    padding: 160px 0;
`

const NumbersDiv = styled.div`
    max-width: 80%;
    margin: auto;
`

const OutcomesTitle = styled.h2`
    max-width: 670px;
    margin: 16px auto;
    text-align: center;
    color: ${gray.darkest};
    font-size: 30px;
    line-height: 40px;
    
    @media (min-width: 800px){
        font-size: 44px;
        line-height: 48px; 
    }
`

const OutcomesDescription = styled.p`
    text-align: center;
    color: ${gray.darker};
    margin: 0 auto 48px;
    max-width: 795px;
    font-size: 16px;
    line-height: 24px;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
    }
`


const BarContainer = styled.div`
    margin: 0 0 90px;
    display: flex;
    justify-content: space-evenly;
    border-top: 2px solid blue;
    border-bottom: 2px solid blue;
    padding: 0px 0px 32px;
    flex-direction: column;

    @media (min-width: 800px){
        flex-direction: row;
        margin: 0 0 160px;
        padding: 24px 0;
    }
`

const StatText = styled.p`
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${gray.darker};
    font-size: 10px;
    line-height: 12px;
    margin-top: 32px;

    @media (min-width: 800px){
        margin-top: 0;
        font-size: 12px;
        line-height: 16px;
    }
`

const StatDescription = styled.h1`
    color: ${blue.darker};
    font-weight: 900;
    text-align: center;
    font-size: 44px;
    line-height: 48px;
    margin-top: 16px;

    @media (min-width: 800px){
        margin-top: 24px;
        font-size: 56px;
        line-height: 56px;
    }
`

const OutcomesSubContainer = styled.div`
    background: ${blue.darkest};
    position: relative;
    padding: 0px 16px 45px;
    width: 100%;
    margin-top: 90px;

    @media (min-width: 800px){
        margin-left: -30%;
        width: 70%;
        padding: 64px 88px;
        margin-top: 0;
    }
`

const OutcomesSubtitle = styled.p`
    font-weight: 900;
    margin-bottom: 40px;
    color: #FBF9F7;
    color: ${gray.lighter};
    font-size: 24px;
    line-height: 32px;

    @media (min-width: 800px){
        font-size: 32px;
        line-height: 40px;
    }
`

const OutcomesImage = styled.img`
    position: relative;
    top: -60px;
    width: 100%;
    max-width: 378px;

    @media (min-width: 800px){
        position: absolute;
        top: 100px;
        left: 92%;
        width: 100%;
        max-width: 323px;  
    }
`

const SubDescription = styled.div`
    & > p {
        max-width: 675px;
        margin-bottom: 24px;
        color: ${gray.base};
        font-size: 14px;
        line-height: 18px;

        @media (min-width: 800px){
            font-size: 16px;
            line-height: 24px;
        }
    }
`


export default function Outcomes(props) {

    const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
            outcomes_description {
                text
            }
            outcomes_image {
                alt
                url
            }
            outcomes_statistics {
                outcomes_stat_description {
                    text
                }
                outcomes_stat_title {
                    text
                }
            }
            outcomes_subdescription {
                html
            }
            outcomes_subtitle {
                text
            }
            outcomes_title {
                text
            }
        }
      }
    }
  `)

  const {
    outcomes_description: {text: outcomesDescription},
    outcomes_image: {url: outImgUrl, alt:outImgAlt},
    outcomes_statistics,
    outcomes_subdescription: {html: outcomesSubDescription},
    outcomes_subtitle: {text: outcomesSubTitle},
    outcomes_title: {text: outcomesTitle},
  } = {...data.prismicVeteransLandingPage.data}

    const mappedStats = outcomes_statistics.map(
        ({
            outcomes_stat_title: {text: statText}, 
            outcomes_stat_description: {text: statDescription}
        }) => {
            return <div>
                        <StatText>{statText}</StatText>
                        <StatDescription>{statDescription}</StatDescription>
                    </div>
        })

    return (
        <OutcomesContainer>
            <NumbersDiv>
                <OutcomesTitle>{outcomesTitle}</OutcomesTitle>
                <OutcomesDescription>{outcomesDescription}</OutcomesDescription>
                <BarContainer>
                    {mappedStats}
                </BarContainer>
            </NumbersDiv>
            <OutcomesSubContainer>
                <OutcomesImage src={outImgUrl} alt={outImgAlt} />
                <OutcomesSubtitle>{outcomesSubTitle}</OutcomesSubtitle>
                <SubDescription dangerouslySetInnerHTML={{ __html: outcomesSubDescription }} />
            </OutcomesSubContainer>
        </OutcomesContainer>
    )
}
