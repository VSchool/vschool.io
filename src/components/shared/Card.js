import React from 'react'
import styled from "styled-components"
import { gray, black, blue } from '@vschool/lotus'

const Container = styled.div`
  width: 366px;
  height: 290px;
  position: relative;
  background-color: transparent;
  margin-bottom: 32px;

  @media(max-width: 400px){
    width: 286px;
  }

  @media(min-width: 1200px){
    margin: 32px 8px;
  }
`

const BackgroundImg = styled.img`
  position: absolute;
  width: 95%;
  top: 0;
  left: 0;
  height: 168px;
`

const OverlayImg = styled.img`
  position: absolute;
  height: 118px;
  right: 65px;
  top: 24px;

  @media(max-width: 400px){
    right: 40px;
    height: 112px;
    top: 32px;
  }
`

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 95%;
	border: 2px solid ${gray.base};
	background-color: ${gray.lightest};
  padding: 24px;

  @media(max-width: 400px){
    padding: 16px;
  }
`

const H4 = styled.h4`
	color: ${black};
	font-family: "aktiv-grotesk";
	font-size: 20px;
  font-weight: 800;

  @media(max-width: 400px){
    font-size: 18px;
  }
`

const P = styled.p`
	color: ${gray.darker};
	font-family: "aktiv-grotesk";
	font-size: 14px;
	font-weight: 500;
  margin-top: 8px;
`

const Anchor = styled.a`
  margin-top: 24px;
	/* color: ${blue.base}; */
  color: #A09C06;
	font-family: "aktiv-grotesk-extended";
	font-size: 14px;
  display: inline-block;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 1px;
`


export default function Card(props){
  const {
    card_image,
    card_header,
    card_text,
    card_photo,
    card_link_text,
  } = props
  return (
    <Container>
      <BackgroundImg src={card_image.url}/>
      <OverlayImg src={card_photo.url}/>
      <TextContainer>
        <H4>{card_header.text}</H4>
        <P>{card_text.text}</P>
        {/* href={card_link.url} */}
        <Anchor disabled>{card_link_text.text}</Anchor>
      </TextContainer>
    </Container>
  )
}