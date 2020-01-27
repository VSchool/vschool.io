import React from 'react'
import styled from 'styled-components'
import { gray } from "@vschool/lotus"
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div`
  width: 100vw;
  padding: 0 24px;
  background-position: center;
  background-color: ${gray.light};
 

  @media(min-width: 600px){
    padding: 0 32px;
  }

  @media(min-width: 840px){
    padding: 0 88px;
  }

  @media(min-width: 1200px){
    padding: 0 176px;
    display: flex;
    justify-content: center;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: -88px;

  @media(min-width: 1200px){
    width: 1000px;
    margin: 0 auto -88px auto;
  }
`

export default function HeroImage(){
  const { 
    prismicLivingInSaltLake: {
      data: {
        hero_image: {
          url: heroImg
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicLivingInSaltLake {
      data {
        hero_image {
          url
        }
      }
    }
  }
`)
  return (
    <Container>
      <Image src={heroImg}/>
    </Container>
  )
}
