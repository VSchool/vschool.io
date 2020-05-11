import React, { useState } from "react"
import styled from "styled-components"
import { black, gray, white, Button } from "@vschool/lotus"

const Container = styled.div`
    width: 100%;
    background-color: ${black};
    padding: 32px 18px 64px 18px;
    margin-top: 64px;

    @media (min-width: 500px) {
        padding: 32px 32px 64px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        padding: 32px 88px 32px 88px;
    }
`

const FixedContainer = styled.div`
    @media (min-width: 1000px) {
        display: flex;
        width: 1050px;
        justify-content: space-between;
        align-items: center;
    }
`

const Header = styled.h2`
    color: ${gray.lightest};
    font-family: "aktiv-grotesk";
    font-weight: 600;
    line-height: 38px;
    font-size: 32px;
    margin-bottom: 64px;
    max-width: 450px;

    @media (min-width: 1000px) {
        max-width: 100%;
        margin-bottom: 0;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: flex-end;
    }
`

const Input = styled.input`
    background-color: ${white};
    border: 2px solid ${gray.base};
    width: 100%;
    color: ${gray.darker};
    max-width: 450px;
    padding: 14px;
    font-size: 16px;
    font-family: "aktiv-grotesk";
    margin-bottom: 16px;

    @media (min-width: 1000px) {
        margin-bottom: 0;
        margin-right: 16px;
        width: 318px;
    }
`

const StyledButton = styled(Button)`
    box-shadow: 4px 4px 0px rgba(255, 255, 255, 0.2);
    min-width: 0;
    width: 100%;
    max-width: 450px;
    outline: none;

    @media (min-width: 1000px) {
        width: 180px;
    }
`

export default function SubscribeBanner(props) {
    return (
        <Container>
            <FixedContainer>
                <Header>
                    Industy insights you won't delete. Delivered to your inbox
                    weekly.
                </Header>
                <Form>
                    <Input type="text" placeholder="Your Email Address" />
                    <StyledButton buttonStyle="secondary-light">
                        Subscribe
                    </StyledButton>
                </Form>
            </FixedContainer>
        </Container>
    )
}
