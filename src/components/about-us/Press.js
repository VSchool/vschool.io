import React from "react"
import styled from "styled-components"
import { black, blue, Button } from "@vschool/lotus"
import { Link } from "gatsby"

const Container = styled.div`
    width: 100%;
    max-width: 350px;
`

const Header = styled.h3`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 38px;
    margin-bottom: 32px;

    @media (min-width: 840px) {
        margin-top: 80px;
    }
`

const SLink = styled(Link)`
    color: ${blue.base};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
    margin-bottom: 16px;
    display: inline-block;
`

const StyledButton = styled(Button)`
  font-family: "aktiv-grotesk-extended";
  margin-top: 40px;
`

export default function Press(props) {
    const { header } = props
    return (
        <Container>
            <Header>{header}</Header>
            {[
                "V School Has a Really Cool Announcement - Forbes | Jan 2020",
                "V School Has a Really Cool Announcement - Forbes | Jan 2020",
                "V School Has a Really Cool Announcement - Forbes | Jan 2020",
            ].map((item, i) => (
                <SLink key={item + i} to="/">
                    {item}
                </SLink>
            ))}
            <StyledButton buttonStyle="primary-light">
              View All
            </StyledButton>
        </Container>
    )
}
