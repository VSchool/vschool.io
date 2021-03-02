import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { black, gray, Button } from "@vschool/lotus"

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

const ButtonDiv = styled.div`
    position: relative;
`

const StyledButton = styled(Button)`
    margin-top: 39px;
    width: 100%;

    @media (min-width: 600px) {
        max-width: 287px;
    }
`

const HiddenInput = styled.input`
    position: absolute;
    opacity: 0;
`

const Tooltip = styled.span`
    display: ${({ $show }) => ($show ? "inline" : "none")};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${black};
    color: white;
    padding: 10px;
    font-size: 10px;
    border-radius: 4px;

    &:after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border-bottom: 6px solid transparent;
        border-top: 6px solid ${black};
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
    }
`

export default function Share() {
    const location = useLocation()
    const [showTooltip, setShow] = useState(false)
    const hiddenInputRef = useRef(null)
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

    function copyText() {
        /** I tried using navigator.clipboard, but it requires permissions from the user
        with the Permissions API, which isn't supported in all modern browsers. This just
        imperatively copies the value from a hidden input box. */
        const input = hiddenInputRef.current
        input.type = "text"
        input.select()
        document.execCommand("copy")
        input.type = "hidden"
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }

    return (
        <Container>
            <Title>{title}</Title>
            <IconsGroup>{icons}</IconsGroup>
            <ButtonDiv>
                <Tooltip $show={showTooltip}>Link Copied!</Tooltip>
                <StyledButton
                    data-tip="Link Copied!"
                    size="lg"
                    onClick={copyText}
                >
                    {buttonText}
                </StyledButton>
            </ButtonDiv>
            <HiddenInput
                type="hidden"
                value={`${location.origin}${shareLinkUrl}`}
                ref={hiddenInputRef}
                onChange={() => {}}
            />
        </Container>
    )
}
