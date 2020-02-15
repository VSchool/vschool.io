import React from 'react'
import styled from 'styled-components'
import { gray, black } from "@vschool/lotus"
import Feature from './Feature.js'

const Container = styled.div`
  background-color: ${gray.lighter};
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 28px;
  padding-top: 160px;

  @media (min-width: 320px) and (max-width: 414px){
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 184px;
  }

  @media (min-width: 600px){
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 208px;
  }

  @media (min-width: 1200px){
    padding-right: 96px;
    padding-left: 96px;
    padding-top: 240px;
  }
`

const H3 = styled.h3`
  color: ${black};	
  font-family: "aktiv-grotesk";	
  font-size: 32px;	
  font-weight: 900;	
  line-height: 40px;	
  text-align: center;
  margin-bottom: 96px;
  width: 366px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 320px) and (max-width: 414px){
    font-size: 28px;
    width: 296px;
  }

  @media (min-width: 840px){
    font-size: 38px;
    width: 500px;
    line-height: 44px;
  }

  @media (min-width: 1200px){
    width: 584px;
    margin-left: auto;
    margin-right: auto;
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 96px;
  }
`

const FeatureList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default function StateFeatures(props){
  const {
    header,
    features
  } = props
  return(
    <Container>
      <H3>{ header }</H3>
      <FeatureList>
        { features.map((feature, i) => 
          <Feature 
            {...feature} 
            key={i}
            inverse={(i+1)%2!==0}/>)
        }
      </FeatureList>
    </Container>
  )
}