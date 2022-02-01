import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, Button, purple } from "@vschool/lotus"
import { navigate } from "@reach/router"

const Container = styled.section`
    background-color: ${purple.lightest};
    padding: 96px 16px;
    background-image: url(${props => props.$bgImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 800px) {
        padding: 172px 80px 140px;
        background-size: auto;
    }
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 32px;
    max-width: 620px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 64px;
    }
`


const ButtonContainer = styled.div`
    display: block;

    @media (min-width: 800px){
      display: flex;
    }
`


const StyledButton = styled(Button)`
    font-size: 14px;
    line-height: 16px;
    padding: 25px 45px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: ${props => props.type === 'packet' ? purple.lightest : gray.darker};
    margin-top: ${props => props.type === 'packet' ? '16px' : 0};
    color: ${props => props.type === 'packet' ? gray.darker : gray.lightest};

    & > img {
        margin: 0 10px;
    }

    @media (min-width: 800px) {
        margin: ${props => props.type === 'packet' ? '0 0 0 12px' : '0 12px 0 0'};
        width: ${props => props.type === 'packet' ? '290px' : '310px'};
    }
`

const Packet = ({submit}) => {
  const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          packet_background_image {
            alt
            url
          }
          packet_button {
            text
          }
          packet_button_arrow {
            alt
            url
          }
          packet_download_info {
            text
          }
          packet_download_logo {
            alt
            url
          }
          packet_title {
            text
          }
        }
      }
    }
  `)

  const {
    packet_background_image: { url: circleUrl },
    packet_button: { text: StartBtn },
    packet_button_arrow: { alt: arrowAlt, url: arrowUrl },
    packet_title: { text: StartTitle },
    packet_download_logo: { alt: logoAlt, url: logoUrl },
  } = data.prismicPrecoursePartners.data


  return (
    <Container $bgImage={circleUrl}>
        <Title>{StartTitle}</Title>
        <ButtonContainer>
          <StyledButton onClick={submit} type="main">
              {StartBtn} <img src={arrowUrl} alt={arrowAlt} />
          </StyledButton>
          <StyledButton onClick={() => navigate("/pre-course-partners/download")} type="packet" >
              Get Info Packet <img src={logoUrl} alt={logoAlt} />
          </StyledButton>
        </ButtonContainer>
    </Container>
  )
}

export default Packet

