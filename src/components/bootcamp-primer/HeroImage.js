import React from "react"
import styled from "styled-components"
import { gray, blue, orange } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"

const HeroContainer = styled.div`
    height: 700px;
    position: relative;
    overflow-x: hidden;
    background-color: ${gray.lighter};
`

const FlexContainer = styled.div`
    position: relative;
    width: 100%;

    @media (min-width: 1200px) {
        display: flex;
        justify-content: center;
    }
`

const BlueBlock = styled.div`
    height: 220px;
    overflow-x: hidden;
    background-color: ${blue.lightest};

    @media (min-width: 840px) {
    }
`

const WhiteBlock = styled.div`
    background-color: ${gray.lighter};

    @media (min-width: 840px) {
        display: none;
    }
`

const Image = styled.div`
    margin-top: -148px;
    background-image: url(${props => props.heroImg});
    background-size: cover;
    position: relative;
    left: -300px;
    height: 530px;
    width: 960px;
    background-repeat: no-repeat;
    overflow-x: hidden;

    @media (min-width: 480px) {
        left: -275px;
    }

    @media (min-width: 600px) {
        left: -200px;
    }

    @media (min-width: 700px) {
        left: -80px;
    }

    @media (min-width: 840px) {
        left: 130px;
    }

    @media (min-width: 1020px) {
        left: 170px;
    }

    @media (min-width: 1200px) {
        display: none;
    }
`

const ImgLarge = styled.div`
    @media (min-width: 1200px) {
        background-image: url(${props => props.heroImgLarge});
        width: 911px;
        height: 530px;
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: -148px;
    }
`

const CodeSnippet = styled.div`
    height: 280px;
    width: 200px;
    background-image: url(${props => props.codeSnippetImg});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    bottom: -40px;

    @media (min-width: 480px) {
        height: 328px;
        width: 250px;
    }

    @media (min-width: 1020px) {
        bottom: 40px;
        right: 5%;
    }

    @media (min-width: 1080px) {
        right: 10%;
    }

    @media (min-width: 1200px) {
        display: none;
    }
`

const OrangeBall = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${orange.base};
    z-index: 4;
    bottom: 128px;
    left: 18px;

    @media (min-width: 600px) {
        left: 50px;
    }

    @media (min-width: 840px) {
        left: 100px;
    }

    @media (min-width: 1020px) {
        left: 140px;
    }

    @media (min-width: 1200px) {
        display: none;
    }
`

const ImgMaskBlue = styled.div`
    height: 200px;
    background-color: ${blue.lightest};
    width: 48px;
    position: absolute;
    z-index: 3;
    top: 20px;

    @media (min-width: 600px) {
        width: 80px;
    }
`

const ImgMaskWhite = styled.div`
    height: 382px;
    background-color: ${gray.lighter};
    width: 48px;
    position: absolute;
    z-index: 3;
    top: 220px;

    @media (min-width: 600px) {
        width: 80px;
    }

    @media (min-width: 840px) {
        width: 130px;
    }

    @media (min-width: 1020px) {
        width: 170px;
    }

    @media (min-width: 1200px) {
        z-index: 0;
    }
`

function HeroImage() {
  const {
    prismicBootcampPrimer: {
      data: {
        hero_image_small: {
          url: heroImg
        },
        hero_image_large: {
          url: heroImgLarge
        },
        hero_image_overlay: {
          url: codeSnippetImg
        }
      }
    }
  } = useStaticQuery(graphql`
    {
      prismicBootcampPrimer {
        data {
          hero_image_large {
            url
          }
          hero_image_overlay {
            url
          }
          hero_image_small {
            url
          }
        }
      }
    }
  `)
    return (
        <HeroContainer>
            <BlueBlock />
            <ImgMaskBlue />
            <ImgMaskWhite />
            <FlexContainer>
                <Image heroImg={ heroImg }/>
                <ImgLarge heroImgLarge={ heroImgLarge }/>
                <CodeSnippet codeSnippetImg={ codeSnippetImg }/>
            </FlexContainer>
            <OrangeBall />
            <WhiteBlock />
        </HeroContainer>
    )
}

export default HeroImage