import React from 'react'
import styled from "styled-components"
import { gray } from '@vschool/lotus'

const Container = styled.div`
  width: 366px;
  height: 290px;
  position: relative;
  background-color: transparent;
  margin-bottom: 32px;

  @media(max-width: 415px){
    width: 286px;
  }

  @media(min-width: 1200px){
    margin: 0 8px;
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

  @media(max-width: 415px){
    right: 48px;
    height: 112px;
    top: 32px;
  }
`

const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 95%;
	height: 148px;
	border: 2px solid #D8D3D0;
	background-color: ${gray.lightest};
  padding: 24px;

  @media(max-width: 415px){
    padding: 16px;
  }
`

const H4 = styled.h4`
	color: #21201F;
	font-family: "aktiv-grotesk";
	font-size: 20px;
  font-weight: 800;

  @media(max-width: 415px){
    font-size: 18px;
  }
`

const P = styled.p`
	color: #514F4B;
	font-family: "aktiv-grotesk";
	font-size: 14px;
	font-weight: 500;
  margin-top: 8px;
`

const Anchor = styled.a`
  margin-top: 24px;
	color: #456AE2;
	font-family: "aktiv-grotesk-extended";
	font-size: 14px;
  display: inline-block;
  text-decoration: none;
  font-weight: 800;
`


export default function Card(props){
  const {
    card_image,
    card_header,
    card_text,
    card_photo,
    card_link_text,
    card_link
  } = props
  return (
    <Container>
      <BackgroundImg src={card_image.url}/>
      <OverlayImg src={card_photo.url}/>
      <TextContainer>
        <H4>{card_header.text}</H4>
        <P>{card_text.text}</P>
        <Anchor href={card_link.url}>{card_link_text.text}</Anchor>
      </TextContainer>
    </Container>
  )
}