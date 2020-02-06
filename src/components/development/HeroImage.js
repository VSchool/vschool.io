import React from "react"
import styled from "styled-components"
import { gray, orange, blue } from "@vschool/lotus"

const Main = styled.div`
    background-color: ${gray.lighter};
`

const Container = styled.div`
    padding: 0 48px;
    position: relative;
    height: 530px;
    background-color: ${blue.lightest};
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
    background-color: ${blue.lightest};

    @media(min-width: 840px){
      width: 88px;
    }
`

const OrangeCircle = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    left: 19px;
    bottom: 51px;
    z-index: 6;
    border-radius: 50%;
    background-color: ${orange.base};

    @media (min-width: 840px) {
        left: 58px;
        bottom: 52px;
    }

    @media(min-width: 1050px){
      display: none;
    }
   
`
const SmallImg = styled.img`
    height: 530px;
    position: relative;
    margin-bottom: -80px;
    left: -340px;
    z-index: 1;

    @media (min-width: 380px) {
        left: -300px;
    }

    @media (min-width: 415px) {
        left: -280px;
    }

    @media (min-width: 470px) {
        left: -240px;
    }

    @media (min-width: 515px) {
        left: -250px;
    }

    @media (min-width: 600px) {
        left: -220px;
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
  width: 170px;
  height: 240px;
  position: absolute;
  z-index: 7;
  right: 0;
  bottom: 30px;

  @media(min-width: 600px){
    width: 250px;
    height: 328px;
  }

  @media(min-width: 600px){

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
      overlayImg
    } = props
    return (
        <Main>
            <Container>
                <GrayWall />
                <WhiteWall />
                <ImagesContainer>
                  <OverlayImg src={overlayImg}/>
                  <OrangeCircle />
                  <SmallImg src={heroImgSm} />
                  <LargeImg src={heroImgLg} />
                </ImagesContainer>
            </Container>
            <WhiteBase />
        </Main>
    )
}
