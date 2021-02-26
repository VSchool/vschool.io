import React, { useRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import ReactTooltip from "react-tooltip"
import { gray, Button } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.light};
    padding-top: 96px;
    padding-bottom: 96px;

    @media (min-width: 800px) {
        padding-top: 160px;
        padding-bottom: 160px;
    }
`

const Title = styled.h3`
    text-align: center;
`

const IconsGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 264px;
    margin-top: 38px;

    @media (min-width: 800px) {
        width: 352px;
        margin-top: 56px;
    }
`

const Icon = styled.img`
    width: 35px;

    @media (min-width: 800px) {
        width: 50px;
    }
`

const StyledButton = styled(Button)`
    margin-top: 39px;
    width: 100%;

    @media (min-width: 600px) {
        max-width: 287px;
    }
`

export default function Share() {
    const location = useLocation()
    const tooltipRef = useRef(null)
    const data = useStaticQuery(graphql`
        {
            prismicWomensHistoryMonthPage {
                data {
                    share_title {
                        text
                    }
                    share_social_links {
                        social_icon {
                            alt
                            url
                        }
                    }
                    share_link_button_text {
                        text
                    }
                    share_link_url {
                        url
                    }
                }
            }
        }
    `)

    const {
        share_title: { text: title },
        share_social_links: socialIcons,
        share_link_button_text: { text: buttonText },
        share_link_url: { url: shareLinkUrl },
    } = data.prismicWomensHistoryMonthPage.data

    const icons = socialIcons.map(icon => (
        <Icon
            src={icon.social_icon.url}
            alt={icon.social_icon.alt}
            key={icon.social_icon.url}
        />
    ))
    return (
        <Container>
            <Title>{title}</Title>
            <IconsGroup>{icons}</IconsGroup>
            <ReactTooltip
                effect="solid"
                event="click"
                globalEventOff="click"
                ref={tooltipRef}
            />
            <StyledButton
                data-tip="Link Copied!"
                size="lg"
                onClick={e => {
                    navigator.clipboard.writeText(
                        `${location.origin}${shareLinkUrl}`
                    )
                    setTimeout(() => {
                        ReactTooltip.hide()
                    }, 500)
                }}
            >
                {buttonText}
            </StyledButton>
        </Container>
    )
}
