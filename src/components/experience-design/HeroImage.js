import React from 'react'
import styled from "styled-components"
import { gray, purple, orange } from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"

const HeroContainer = styled.div`
  height: 700px;
  position: relative;
  background-color: ${gray.lighter}; 
  overflow-x: hidden;
`

const FlexContainer = styled.div`
  position: relative;
  width: 100%;


  @media (min-width: 1200px){
    display: flex;
    justify-content: center;
  }
`

const VioletBlock = styled.div`
  height: 470px;
  overflow-x: hidden;
  background-color: ${purple.lightest};

  @media (min-width: 1200px){
    height: 440px;
  }
`

const WhiteBlock = styled.div`
  background-color: ${gray.lighter};


  @media (min-width: 840px){
    display: none;
  }
`

const Image = styled.div`
  margin-top: -450px;
  background-image: url(${props => props.heroImg});
  position: relative;
  height: 530px;
  
  background-repeat: no-repeat;


  @media (min-width: 480px){
    left: 0px;
  }

  @media (min-width: 600px){
    left: 20px;
  }

  @media (min-width: 700px){
    left: 30px;
  }

  @media (min-width: 840px){
    left: 130px;
  }

  @media (min-width: 1020px){
    left: 170px;
  }

  @media (min-width: 1200px){
    display: none;
  }
`

const ImgLarge = styled.div`
  @media (min-width: 1200px){
    background-image: url(${props => props.heroImgLarge});
    width: 911px;
    height: 530px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: -427px;
  }
`

const CodeSnippet = styled.div`
  height: 319px;
  width: 250px;
  background-image: url(${props => props.codeSnippetImg});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: -40px;

  @media (min-width: 480px){
    height: 328px;
    width: 250px;
  }

  @media (min-width: 1020px){
    bottom: 40px;
    right: 5%;
  }

  @media (min-width: 1080px){
    right: 10%;
  }

  @media (min-width: 1200px){
    display: none;
  }
`


const OrangeBall = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${orange.light};
  z-index: 4;
  bottom: 200px;
  left: 18px;

  @media (min-width: 600px){
    left: 50px;
  }

  @media (min-width: 840px){
    left: 100px;
  }

  @media (min-width: 1020px){
    left: 140px;
  }

  @media (min-width: 1200px){
    display: none;
  }

`

const ImgMaskViolet = styled.div`
  height: 448px;
  background-color: ${purple.lightest};
  width: 48px;
  position: absolute;
  z-index: 3;
  top: 20px;

  @media (min-width: 600px){
    width: 80px;
    height: 450px;
  }

  @media (min-width: 1200px){
    height: 420px;
  }
`

const ImgMaskWhite = styled.div`
  height: 82px;
  background-color: ${gray.lighter};
  width: 48px;
  position: absolute;
  z-index: 3;
  bottom: 150px;

  @media (min-width: 600px){
    width: 80px;
  }

  @media (min-width: 840px){
    width: 130px;
  }

  @media (min-width: 1020px){
    width: 170px;
  }

  @media (min-width: 1200px){
    z-index: 0;
  }
`

function HeroImage(){

  const { 
    prismicXdPage: {
      data: {
        hero_img_large: {
          url: heroImgLarge,
          alt: heroImgLargeAlt
        },
        hero_img_small: {
          url: heroImg,
          alt: heroImgSmallAlt
        },
        hero_img_overlay: {
          url: codeSnippetImg,
          alt: codeSnippetImgAlt
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicXdPage {
      data {
        hero_img_large {
          alt
          url
        }
        hero_img_overlay {
          alt
          url
        }
        hero_img_small {
          alt
          url
        }
      }
    }
  }
`)
  
  return (
    <HeroContainer>
      <VioletBlock />
      <ImgMaskViolet />
      <ImgMaskWhite />
      <FlexContainer>
        <Image heroImg={heroImg} alt={heroImgSmallAlt}/>
        <ImgLarge heroImgLarge={heroImgLarge} alt={heroImgLargeAlt}/>
        <CodeSnippet codeSnippetImg={codeSnippetImg} alt={codeSnippetImgAlt}/>
      </FlexContainer>
      <OrangeBall />
      <WhiteBlock />
    </HeroContainer>
  )
}

export default HeroImage