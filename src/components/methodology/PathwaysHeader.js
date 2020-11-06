import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { black, gray, blue } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
        padding-top: 80px;
    }
`

const Header = styled.h2`
  font-size: 32px;
  line-height: 38px;
  font-family: "aktiv-grotesk";
  color: ${black};
  text-align: center;
  font-weight: 800;
  margin-bottom: 32px;

  @media(min-width: 600px){
    font-size: 44px;
  }

  @media(min-width: 1100px){
    margin-top: 56px;
  }
`

const SubHeader = styled.h5`
  font-size: 12px;
  line-height: 20px;
  font-family: "aktiv-grotesk-extended";
  color: ${blue.base};
  width: 250px;
  margin-bottom: 32px;
  text-align: center;


  @media(min-width: 600px){
    width: 100%;
    font-size: 14px;
  }
`

export default function PathwaysHeader(){
  const data = useStaticQuery(graphql`
    {
      prismicMethodologyPage {
        id
        data {
          pathways_header {
            text
          }
          pathways_subheader {
            text
          }
        }
      }
    }
  `)

  const {
    pathways_subheader: { text: pathwaysSubheader },
    pathways_header: { text: pathwaysHeader }
} = data.prismicMethodologyPage.data

  return (
    <Container>
      <Header>{pathwaysHeader}</Header>
      <SubHeader>{pathwaysSubheader}</SubHeader>
    </Container>
  )
}