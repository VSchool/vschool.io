import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { purple, black, white, orange, gray } from '@vschool/lotus'

const Container = styled.div`
  background-color: ${purple.lightest};
  padding-top: 96px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 96px;

  @media (min-width: 320px) and (max-width: 414px){
    padding-left: 16px; 
    padding-right: 16px;
  }
`
const H1 = styled.h1`
  color: ${black};	
  font-family: "aktiv-grotesk";	
  font-size: 44px;	
  font-weight: 900;	
  line-height: 48px;	
  text-align: center;
  margin-bottom: 32px;

  @media (min-width: 860px){
    font-size: 48px;
    line-height: 52px;
    margin-bottom: 38px;
  }

  @media (min-width: 1200px){
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 48px;
  }
`

const SessionContainer = styled.div`
  background-image: url(${props => props.sessionBG});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 143px;
  width: 367px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 320px) and (max-width: 414px){
    width: 286px;
  }

  @media (min-width: 900px){
    width: 643px;
    background-image: url(${props => props.sessionBGLarge});
  }
`

const NextSession = styled.div`
  width: 326px;
  height: 100px;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 414px){
    width: 258px;
  }

  @media (min-width: 900px){
    width: 608px;
  }
`

const SessionText = styled.h5`
  font-family: "aktiv-grotesk";	
  font-size: 20px;	
  font-weight: 800;
  line-height: 26px;	
  text-align: center;
`

const SessionHeader = styled(SessionText)`
  color: ${black};
  padding-bottom: 2px;
`

const SessionDate = styled(SessionText)`
  color: ${orange.dark};
`

const Options = styled.h3`
  color: ${black};	
  font-family: "aktiv-grotesk-extended";	
  font-size: 16px;	
  font-weight: 800;
  line-height: 24px;	
  text-align: center;
  margin-top: 16px;
  margin-bottom: 32px;

  @media (min-width: 860px){
    margin-top: 24px;
    margin-bottom: 48px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  height: 48px;	
  width: 318px;
  color: ${white};	
  font-family: "aktiv-grotesk-extended";	
  font-size: 14px;
  font-weight: 800;	
  letter-spacing: 1px;	
  line-height: 16px;	
  text-align: center;
  border: 2px solid ${black};	
  background-color: ${gray.darker};
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

  @media(min-width: 300px) and (max-width: 400px){
    width: 286px;
  }

  @media (min-width: 900px){
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.14px;
  }
`

function CallToAction(props){
  const { 
    prismicXdPage: {
      data: {
        call_to_action_title: {
          text: title
        },
        call_to_action_sub: {
          text: sub
        },
        call_to_action_btn: {
          text: btnText
        },
        next_session_title: {
          text: nextSessionTitle
        },
        next_session_date: {
          text: nextSessionDate
        },
        next_session_image_small: {
          url: sessionBG
        },
        next_session_image_large: {
          url: sessionBGLarge
        },
        call_to_action_link: {
          url: link
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicXdPage {
      data {
        call_to_action_btn {
          text
        }
        call_to_action_sub {
          text
        }
        call_to_action_title {
          text
        }
        next_session_date {
          text
        }
        next_session_title {
          text
        }
        next_session_image_large {
          url
        }
        next_session_image_small {
          url
        }
        call_to_action_link {
          url
        }
      }
    }
  }
`)
  return (
    <Container>
      <H1>{ title }</H1>
      <SessionContainer
        sessionBG={ sessionBG } 
        sessionBGLarge={ sessionBGLarge }>
        <NextSession>
          <SessionHeader>{ nextSessionTitle }</SessionHeader>
          <SessionDate>{ nextSessionDate }</SessionDate>
        </NextSession>
      </SessionContainer>
      <Options>{ sub }</Options>
      <FlexContainer>
        <a href={ link }>
          <Button>{ btnText }</Button>
        </a>
      </FlexContainer>
    </Container>
  )
}

export default CallToAction