import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { gray, black, purple, Button } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.section`
    background-color: ${gray.lightest};
    padding-bottom: 160px;
    padding-top: 96px;
    justify-content: center;

    @media (max-width: 370px) {
        padding-top: 8px;
    }

    @media (min-width: 1200px) {
        padding-bottom: 208px;
    }
`

const FixedContainer = styled.div`
    width: 100%;
    max-width: 366px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1200px) {
        max-width: 100%;
    }
`

const Header = styled.h2`
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    width: 100%;
    max-width: 300px;
    color: ${black};

    @media (min-width: 1200px) {
        max-width: 840px;
        font-size: 56px;
        line-height: 56px;
    }
`

const SubHeader = styled.p`
    font-family: "aktiv-grotesk-extended";
    color: ${purple.darker};
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    margin-top: 16px;

    @media (min-width: 1200px) {
        margin-top: 32px;
    }
`

const Info = styled.p`
    margin-top: 16px;
    color: ${gray.darker};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    @media (min-width: 1200px) {
        max-width: 840px;
        font-size: 20px;
        line-height: 28px;
        margin-top: 32px;
    }
`

const Invite = styled.h3`
    margin-top: 48px;
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    width: 250px;

    @media (min-width: 1200px) {
        font-size: 32px;
        width: 100%;
        line-height: 38px;
        margin-top: 96px;
    }
`

const StyledButton = styled(Button)`
    margin-top: 48px;
    width: 203px;
    max-width: 203px;
    height: 56px;
    font-family: "aktiv-grotesk-extended";
`

const StyledLink = styled(QueryLink)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`

export default function WorkWithUs(props) {
    const data = useStaticQuery(graphql`
        {
            prismicResponsiveLearning {
                data {
                    work_with_us_btn {
                        text
                    }
                    work_with_us_btn_link {
                        url
                    }
                    work_with_us_header {
                        text
                    }
                    work_with_us_info {
                        text
                    }
                    work_with_us_invite {
                        text
                    }
                    work_with_us_subheader {
                        text
                    }
                }
            }
        }
    `)

    const {
        work_with_us_btn: { text: workWithUsBtnText },
        work_with_us_btn_link: { url: workWithUsLink },
        work_with_us_header: { text: workWithUsHeader },
        work_with_us_info: { text: workWithUsInfo },
        work_with_us_invite: { text: workWithUsInvite },
        work_with_us_subheader: { text: workWithUsSubheader },
    } = data.prismicResponsiveLearning.data
    
    return (
        <Container>
            <FixedContainer>
                <Header>{workWithUsHeader}</Header>
                <SubHeader>{workWithUsSubheader}</SubHeader>
                <Info>{workWithUsInfo}</Info>
                <Invite>{workWithUsInvite}</Invite>
                <StyledLink to={workWithUsLink}>
                    <StyledButton>{workWithUsBtnText}</StyledButton>
                </StyledLink>
            </FixedContainer>
        </Container>
    )
}
