import React from "react"
import styled from "styled-components"
import { gray, orange } from "@vschool/lotus"

const Main = styled.div`
    background-color: ${gray.lighter};
`

const Container = styled.div`
    padding: 0 48px;
    position: relative;
    height: 530px;
    background-color: ${gray.light};
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
    background-color: ${gray.light};

    @media(min-width: 840px){
      width: 88px;
    }
`

const OrangeBall = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${orange.light};
    position: absolute;
    left: 18px;
    bottom: 52px;
    z-index: 6;
    border-radius: 50%;


    @media (min-width: 840px) {
        left: 58px;
    }

    @media(min-width: 1050px){
      display: none;
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

export default function HeroImage(props) {
    const { 
      heroImgLg, 
      heroImgSm 
    } = props
    return (
        <Main>
            <Container>
                <GrayWall />
                <WhiteWall />
                <OrangeBall />
                <SmallImg src={heroImgSm} />
                <LargeImg src={heroImgLg} />
            </Container>
            <WhiteBase />
        </Main>
    )
}
