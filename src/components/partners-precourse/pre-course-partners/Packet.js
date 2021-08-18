import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, Button, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding: 96px 40px;
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

const StyledButton = styled(Button)`
    font-size: 14px;
    line-height: 16px;
    padding: 25px 45px;
    display: flex;
    align-items: center;

    & > img {
        margin: 0 10px;
    }
`

const DownloadDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding-top: 40px;
    max-width: 260px;

    @media (min-width: 800px) {
      max-width: initial;
    }
`

const DownloadImg = styled.img`
    width: 40px;
`

// const DownloadLink = styled.a`

// `

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
    packet_download_info: { text: downloadInfo},
    packet_download_logo: { alt: logoAlt, url: logoUrl },
  } = data.prismicPrecoursePartners.data


  return (
    <Container $bgImage={circleUrl}>
        <Title>{StartTitle}</Title>
        <StyledButton onClick={submit}>
            {StartBtn} <img src={arrowUrl} alt={arrowAlt} />
        </StyledButton>
        <DownloadDiv>
          <DownloadImg src={logoUrl} alt={logoAlt} />
          <a>{downloadInfo}</a>
        </DownloadDiv>
    </Container>
  )
}

export default Packet

