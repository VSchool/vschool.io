import React from "react"
import styled from "styled-components"
import { gray, green } from "@vschool/lotus"

const Main = styled.div`
    background-color: ${gray.lighter};
`

const Container = styled.div`
    padding: 0 48px;
    position: relative;
    height: 530px;
    background-color: ${green.lightest};
    overflow-x: hidden;

    @media (min-width: 1050px) {
        display: flex;
        justify-content: center;
    }
`

const WhiteBase = styled.div`
    background-color: ${gray.lighter};
    height: 80px;
    position: relative;
    bottom: 80px;
    z-index: 0;
`

const WhiteWall = styled.div`
    background-color: ${gray.lighter};
    width: 48px;
    height: 80px;
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: 6;

    @media(min-width: 840px){
      width: 88px;
    }
`
const GrayWall = styled.div`
    width: 48px;
    height: 450px;
    position: absolute;
    left: 0;
    bottom: 80px;
    z-index: 2;
    background-color: ${green.lightest};

    @media(min-width: 840px){
      width: 88px;
    }
`

const GreenCircle = styled.img`
    width: 88px;
    height: 88px;
    position: absolute;
    left: 8px;
    bottom: 38px;
    z-index: 6;
    border-radius: 50%;


    @media (min-width: 840px) {
        left: 42px;
        bottom: 34px;
        width: 96px;
        height: 96px;
    }

    @media(min-width: 1050px){
      left: -44px;
      z-index: 7;
    }
   
`
const SmallImg = styled.img`
    height: 530px;
    position: relative;
    margin-bottom: -80px;
    left: -440px;
    z-index: 1;

    @media (min-width: 380px) {
        left: -375px;
    }

    @media (min-width: 415px) {
        left: -350px;
    }

    @media (min-width: 470px) {
        left: -295px;
    }

    @media (min-width: 515px) {
        left: -250px;
    }

    @media (min-width: 600px) {
        left: -200px;
    }

    @media (min-width: 700px) {
        left: -160px;
    }

    @media (min-width: 800px) {
        left: -40px;
    }

    @media (min-width: 900px) {
        left: 40px;
    }

    @media (min-width: 1050px) {
        left: 0px;
        display: none;
    }
`

const LargeImg = styled.img`
  display: none;
  height: 530px;
  position: relative;
  margin-bottom: -80px;
  left: 0px;
  z-index: 6;

  @media(min-width: 1050px){
    display: inline-block;
  }
`

const OverlayImg = styled.img`
  width: 200px;
  height: 165px;
  position: absolute;
  z-index: 7;
  right: 0;
  bottom: 30px;

  @media(min-width: 400px){
    width: 226px;
    height: 175px;
  }

  @media(min-width: 600px){
    bottom: 82px
  }

  @media(min-width: 900px){
    right: 56px;
  }

  @media(min-width: 1050px){
    display: none;
  }
`

const ImagesContainer = styled.div`
  @media(min-width: 1050px){
    position: relative;
  }
`

export default function HeroImage(props) {
    const { 
      heroImgLg, 
      heroImgSm,
      greenCircle,
      overlayImg
    } = props
    return (
        <Main>
            <Container>
                <GrayWall />
                <WhiteWall />
                <ImagesContainer>
                  <OverlayImg src={overlayImg}/>
                  <GreenCircle src={greenCircle}/>
                  <SmallImg src={heroImgSm} />
                  <LargeImg src={heroImgLg} />
                </ImagesContainer>
            </Container>
            <WhiteBase />
        </Main>
    )
}
