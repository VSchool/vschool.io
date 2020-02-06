import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import { gray, white, black, blue } from "@vschool/lotus"

const FlexContainer = styled.div`
  background-color: ${gray.lighter};
  padding-top: 56px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 72px;


  @media (min-width: 860px){
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 1200px){
    padding-bottom: 160px;
  }
`

const Option = styled.div`
  border: 2px solid ${gray.base};	
  background-color: ${white};
  padding: 40px 32px;
  width: 366px;
  height: 206px;
  margin-bottom: 24px;

  @media (min-width: 320px) and (max-width: 414px){
    width: 286px;
  }

  @media (min-width: 860px){
    margin-right: 16px;
    margin-left: 16px;
    width: 320px;
  }
`

const H4 = styled.h4`
  color: ${black};	
  font-family: "aktiv-grotesk";	
  font-size: 24px;	
  font-weight: 800;
  line-height: 30px;
  padding-bottom: 12px;
`

const P = styled.p`
  color: ${gray.darker};	
  font-family: "aktiv-grotesk";	
  font-size: 14px;	
  font-weight: 500;	
  line-height: 18px;
  padding-bottom: 24px;
  height: 64px;
`

const LearnMore = styled.a`
  color: ${blue.base};	
  font-family: "aktiv-grotesk-extended";	
  font-size: 14px;	
  font-weight: 800;
  letter-spacing: 1px;	
  line-height: 16px;
  text-decoration: none;

  :active {
    color: ${blue.base};
  }

  :visited {
    color: ${blue.base};
  }
`

function PaymentOptions(props){
  const { 
    prismicXdPage: {
      data: {
        payment_options: paymentOptions
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicXdPage {
      data {
        payment_options {
          payment_info {
            text
          }
          payment_type {
            text
          }
          payment_info_link {
            url
          }
        }
      }
    }
  }
`)
  return (
    <FlexContainer>
      {
        paymentOptions.map(({payment_type, payment_info, payment_info_link})=> {
          return (
            <Option key={ payment_type.text }>
              <H4>{ payment_type.text }</H4>
              <P>{ payment_info.text }</P>
              <LearnMore href={payment_info_link.url}>Learn More</LearnMore>
            </Option>
          )
        })
      }
    </FlexContainer>
  )
}

export default PaymentOptions