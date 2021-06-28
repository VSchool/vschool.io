import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, Button, blue } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${blue.lightest};
    padding: 96px 40px;
    background-image: url(${props => props.bgImage});
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

const Start = props => {
    const data = useStaticQuery(graphql`
        {
            prismicPrecourseCommunitiesPage {
                data {
                    start_background_image {
                        alt
                        url
                    }
                    start_button_text {
                        text
                    }
                    start_right_arrow {
                        alt
                        url
                    }
                    start_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        start_background_image: { alt: circleAlt, url: circleUrl },
        start_button_text: { text: StartBtn },
        start_right_arrow: { alt: arrowAlt, url: arrowUrl },
        start_title: { text: StartTitle },
    } = data.prismicPrecourseCommunitiesPage.data

    return (
        <Container bgImage={circleUrl}>
            <Title>{StartTitle}</Title>
            <StyledButton onClick={props.submit}>
                {StartBtn} <img src={arrowUrl} alt={arrowAlt} />
            </StyledButton>
        </Container>
    )
}

export default Start
