import React from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import YouTube from "react-youtube"
import { gray, blue } from "@vschool/lotus"
import Link from "../shared/QueryLink"

const Container = styled.section`
    padding-top: 96px;
`

const ContentContainer = styled.div`
    width: 100%;
    border: 2px solid ${gray.base};
    padding: 64px 24px;
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 64px 48px;
        align-items: center;
    }
`
const TextContainer = styled.div`
    max-width: 100%;
    flex-basis: 50%;
    @media (min-width: 800px) {
        margin-right: 32px;
    }
`
const YouTubeContainer = styled.div`
    flex-basis: 50%;
    margin-top: 48px;
    width: 100%;
    max-width: 448px;
    height: 100%;
    /* max-height: 281px; */
    @media (min-width: 800px) {
        margin-top: 0;
    }
`
const StyledYouTube = styled(YouTube)`
    max-height: 281px;
`

const Logo = styled.img``
const Title = styled.h4`
    margin-top: 16px;
`

const baseTextStyles = css`
    margin-top: 16px;
    color: ${gray.darker};
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
    }
`
const Text = styled.p`
    ${baseTextStyles}
`
const Visit = styled.div`
    & > p {
        ${baseTextStyles}
    }
`

export default function PartnerInfo() {
    const data = useStaticQuery(graphql`
        {
            prismicWomensHistoryMonthPage {
                data {
                    highlight_title {
                        text
                    }
                    scholarship_tech_moms_logo {
                        url
                        alt
                    }
                    highlight_text {
                        text
                    }
                    highlight_visit_text {
                        html
                    }
                    highlight_youtube_video {
                        embed_url
                    }
                }
            }
        }
    `)

    const {
        highlight_title: { text: title },
        scholarship_tech_moms_logo: { url: logoUrl, alt: logoAlt },
        highlight_text: { text },
        highlight_visit_text: { html: visitHtml },
        highlight_youtube_video: { embed_url: youtubeUrl },
    } = data.prismicWomensHistoryMonthPage.data
    const youTubeVideoId = youtubeUrl.split("v=")[1]
    return (
        <Container>
            <ContentContainer>
                <TextContainer>
                    <Logo src={logoUrl} alt={logoAlt} />
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                    <Visit dangerouslySetInnerHTML={{ __html: visitHtml }} />
                </TextContainer>
                <YouTubeContainer>
                    <StyledYouTube
                        videoId={youTubeVideoId}
                        opts={{ width: "100%" }}
                    />
                </YouTubeContainer>
            </ContentContainer>
        </Container>
    )
}
