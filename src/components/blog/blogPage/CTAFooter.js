import React, { useState } from "react"
import styled from "styled-components"
import { Button, gray, black } from "@vschool/lotus"
import facebook from "../../../images/icons/facebook.png"
import twitter from "../../../images/icons/twitter.png"
import linkdin from "../../../images/icons/linkdin.png"
import othericon from "../../../images/icons/othericon.png"
import QueryLink from "../../shared/QueryLink.js"
import { CopyToClipboard } from "react-copy-to-clipboard"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 192px;
`

const StyledButton = styled(Button)`
    font-family: "aktiv-grotesk-extended";
    height: 56px;
`

const IconContainer = styled.div`
    width: 100%;
    max-width: 672px;
    border-bottom: 2px solid ${gray.base};
    display: flex;
    justify-content: center;
    margin-top: 64px;
    margin-bottom: 16px;
`

const Icon = styled.img`
    width: 24px;
    margin: 8px;
`

const StyledLink = styled(QueryLink)``

const CopiedText = styled.span`
    position: relative;
`

const CopiedPopup = styled.span`
    position: absolute;
    top: -24px;
    left: 8px;
    display: inline-block;
    padding: 8px;
    color: ${gray.lighter};
    background-color: ${gray.darker};
    border-radius: 20px;
    font-size: 12px;

    opacity: ${({show}) => show ? 1 : 0};
    transition: opacity 150ms linear;
`   


export default function CTAFooter(props) {
    const [copied, setCopied] = useState(false)
    const { url } = props

    function handleCopy(){
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
    }

    return (
        <Container>
            {/* 
                This button doesn't need to show for each post .
                Potentially we'll make a tag in ghost that triggers this to show.
            */}
            {/* <StyledLink to="/hi">
                <StyledButton>Make It Happen</StyledButton>
            </StyledLink> */}
            <IconContainer>
                <StyledLink to="https://twitter.com/vschool_">
                    <Icon src={twitter} />
                </StyledLink>
                <StyledLink to="https://www.facebook.com/VSCHOOLHQ/">
                    <Icon src={facebook} />
                </StyledLink>
                <StyledLink to="https://www.linkedin.com/school/v-school/">
                    <Icon src={linkdin} />
                </StyledLink>
                <CopyToClipboard text={url} onCopy={handleCopy}>
                    <CopiedText>
                        <CopiedPopup show={copied}>Copied!</CopiedPopup> 
                        <Icon src={othericon} />
                    </CopiedText>
                </CopyToClipboard>
            </IconContainer>
        </Container>
    )
}
