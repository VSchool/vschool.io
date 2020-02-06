import React from "react"
import styled from "styled-components"
import { gray, black } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items:center;

    @media (max-width: 400px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 600px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1100px) {
        padding-top: 64px;
    }

    @media (min-width: 1200px) {
        padding-right: 96px;
        padding-left: 96px;
    }
`

const H4 = styled.h4`
    width: 100%;
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    padding-bottom: 48px;

    @media (min-width: 600px) {
        max-width: 540px;
        padding-bottom: 56px;
    }

    @media (min-width: 840px) {
    }

    @media (min-width: 1200px) {
        font-size: 32px;
    }
`

const LogoListContainer = styled.div`
    background-color: ${gray.lighter};
    display: flex;

    @media(min-width: 1050px){
      flex-direction: column;
      width: 100%; 
      max-width: 1024px;
    }
`

const LogoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  margin: 0 24px;

  @media(min-width: 500px){
    height: 450px;
  }

  @media(min-width: 600px){
    height: 500px;
  }

  @media(min-width: 700px){
    height: 550px;
  }

  @media(min-width: 840px){
    height: 600px;
  }

  @media(min-width: 1050px){
    flex-direction: row;
    height: 56px;
    margin: 24px 0;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100%;
  width: 100%;

  @media(min-width: 1050px){
    width: auto;
    height: auto;
  }
`

const Logo = styled.img`
  width: 64px;

  @media(min-width: 400px){
    width: 72px;
  }

  @media(min-width: 500px){
    width: 80px;
  }

  @media(min-width: 600px){
    width: 88px;
  }

  @media(min-width: 700px){
    width: 96px;
  }

  @media(min-width: 840px){
    width: ${props => props.i === 0 ? 40 : 104}px;
  }


`

export default function Companies(props) {
    const { header, logos } = props
    return (
        <Container>
            <H4>{header}</H4>
            <LogoListContainer>
              <LogoList>
                {logos.slice(0, 6).map(({logo}, i) => <LogoContainer key={logo.url}><Logo i={i} src={logo.url}/></LogoContainer>)}
              </LogoList>
              <LogoList>
                {logos.slice(6, 11).map(({logo}, i) => <LogoContainer key={logo.url}><Logo src={logo.url}/></LogoContainer>)}
              </LogoList>
              <LogoList>
                {logos.slice(11).map(({logo}, i) => <LogoContainer key={logo.url}><Logo src={logo.url}/></LogoContainer>)}
              </LogoList>
            </LogoListContainer>
        </Container>
    )
}
