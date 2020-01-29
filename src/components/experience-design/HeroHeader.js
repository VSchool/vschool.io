import React from 'react'
import styled from 'styled-components'
import { white, gray, black, purple } from '@vschool/lotus'
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  background-color: ${purple.lightest};
  padding-top: 96px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 80px;

  @media (min-width: 600px){
    padding-left: 32px; 
    padding-right: 32px;
  }

  @media (min-width: 840px){
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1200px){
    padding-left: 88px;
    padding-right: 88px;
  }
`

const H1 = styled.h1`
  font-family: "aktiv-grotesk";	
  font-size: 36px;	
  font-weight: 900;	
  line-height: 40px;	
  text-align: center;
  color: ${black};
  margin-bottom: 16px;
  width: 460px;
  

  @media (min-width: 600px){
    font-size: 40px;
  }

  @media (min-width: 840px){
    font-size: 48px;
    line-height: 48px;
    width: 600px;
  }

  @media (min-width: 1200px){
    font-size: 56px;
    width: 946px;
    padding-left: 160px;
    padding-right: 160px;
    line-height: 56px;
    
  }
`

const P = styled.p`
  color: ${gray.darker};	
  font-family: "aktiv-grotesk";	
  font-size: 16px;	
  font-weight: 700;	
  line-height: 24px;	
  text-align: center;
  margin-bottom: 24px;
  width: 460px;

  @media (min-width: 840px){
    font-size: 18px;
    line-height: 26px;
    width: 600px;
  }

  @media (min-width: 1200px){
    font-size: 20px;
    line-height: 28px;
   
    width: 598px;
  }
`

const H6 = styled.h6`
  color: ${black};	
  font-family: "aktiv-grotesk-extended";	
  font-size: 14px;	
  line-height: 20px;	
  text-align: center;
  padding: 0 8px;
  margin-bottom: 32px;

  @media (min-width: 840px){
    font-weight: 800;
  }

  @media (min-width: 1200px){
    padding-left: 160px;
    padding-right: 160px;
    font-size: 16px;
    line-height: 24px;
  }
`

const Button = styled.button`
  height: 48px;	
  width: 318px;
  color: ${white};	
  font-family: "aktiv-grotesk-extended";	
  font-size: 14px;	
  font-weight: bold;	
  letter-spacing: 1px;	
  line-height: 18px;	
  text-align: center;
  border: 2px solid ${black};	
  background-color: ${gray.darker};
  margin: 0 auto;
  box-shadow: 4px 4px 0 0 rgba(0,0,0,0.2);
  outline: none;

  :hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 0 rgba(100,100,100, 0.5);
  }

  :active {
    transform: translate(4px, 4px);
    box-shadow: inset 1px 1px #eee9;
    border-top: 1px solid #eee9;
    border-left: 1px solid #eee9;
  }

  @media(min-width: 300px) and (max-width: 380px){
    width: 286px;
  }

  @media (min-width: 1200px){
    font-size: 16px;
    letter-spacing: 1.14px;
    line-height: 24px;
    height: 56px;
    width: 268px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

function HeroHeader(){
  const { 
    prismicXdPage: {
      data: {
        main_page_title: { 
          text: title
        }, 
        subtitle: { 
          text: sub 
        },
        invite: {
          text: invite
        },
        make_it_happen_link: {
          url: link
        },
        make_it_happen_btn: {
          text: btnText
        }
      }
    }
  } = useStaticQuery(graphql`
      {
        prismicXdPage(data: {main_page_title: {text: {}}, subtitle: {}}) {
          id
          data {
            main_page_title {
              text
            }
            subtitle {
              text
            }
            invite {
                text
            }
            make_it_happen_link {
              url
            }
            make_it_happen_btn {
              text
            }
          }
        }
      }
    `)
  return (
    <Container>
      <FlexContainer>
        <H1>{title}</H1>
      </FlexContainer>
      <FlexContainer>
        <P>{sub}</P>
      </FlexContainer>
      <H6>{invite}</H6>
      <FlexContainer>
      <a href={link}>
        <Button
          color={"gray"}
          backgroundColor={"gray"}
        >{ btnText }</Button>
      </a>
      </FlexContainer>
    </Container>
  )
}

export default HeroHeader