import React from "react"
import styled from "styled-components"
import { gray, black, Button } from "@vschool/lotus"
import QueryLink from "../shared/QueryLink.js"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (min-width: 1200px) {
        padding-top: 96px;
        padding-left: 88px;
        padding-right: 88px;
    }
`

const HeaderContainer = styled.div`
    @media (min-width: 1200px) {
        width: 1024px;
    }
`

const Header = styled.h2`
    font-family: "aktiv-grotesk";
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${black};

    @media (min-width: 1200px) {
        font-size: 44px;
        line-height: 48px;
        text-align: left;
    }
`

const ScholarshipContainer = styled.div`
    background-image: ${({ bgImg }) => `url(${bgImg})`};
    background-size: cover;
    padding: 16px;
    margin-top: 64px;
    width: 100%;
    max-width: 380px;

    @media (min-width: 1200px) {
        padding: 24px;
        max-width: 1024px;
    }
`

const WhiteContainer = styled.div`
    padding: 48px 16px;
    background-color: ${gray.lighter};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        align-items: flex-start;
        padding: 40px 32px;
    }
`

const DeadlineText = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${gray.darker};
`

const DateText = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: ${black};
    margin-top: 4px;
    margin-bottom: 32px;
`

const BulletsContainer = styled.div`
    & div:nth-child(2) {
        margin-top: 16px;
    }

    @media (min-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        & div:nth-child(2) {
            margin-top: 0;
            margin-left: 34px;
        }
    }
`

const Bullet = styled.div`
    display: flex;
    padding: 0 8px;
`

const CheckMark = styled.img`
    width: 20px;
    height: 16px;
    margin-top: 4px;
`

const BulletText = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    margin-left: 8px;
`

const LinkAndInfo = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row;
        width: 1024px;
        justify-content: flex-start;
    }
`

const StyledLink = styled(QueryLink)`
    max-width: 284px;
    width: 100%;
    display: inline-block;

    @media (min-width: 1200px) {
        max-width: 136px;
        width: 136px;
    }
`

const StyledButton = styled(Button)`
    width: 100%;
    max-width: 284px;
    height: 40px;
    max-height: 40px;
    font-family: "aktiv-grotesk-extended";
    font-size: 12px;

    @media (min-width: 1200px) {
        max-width: 136px;
        width: 136px;
    }
`

const Info = styled.p`
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: ${gray.darker};
    margin-top: 32px;
    padding: 0 10px;

    @media (min-width: 1200px) {
        max-width: 340px;
        width: 100%;
        margin-left: 120px;
        margin-top: 0;
    }
`

export default function ScholarshipDetails(props) {
    const {
        header,
        deadlineText,
        deadlineDate,
        bullets,
        info,
        btnText,
        link,
        bgImg,
    } = props
    return (
        <Container>
            <HeaderContainer>
                <Header>{header}</Header>
            </HeaderContainer>
            <ScholarshipContainer bgImg={bgImg}>
                <WhiteContainer>
                    <DeadlineText>{deadlineText}</DeadlineText>
                    <DateText>{deadlineDate}</DateText>
                    <BulletsContainer>
                        {bullets.map(({ bullet, checkmark }) => (
                            <Bullet key={bullet.text}>
                                <CheckMark src={checkmark.url} />
                                <BulletText>{bullet.text}</BulletText>
                            </Bullet>
                        ))}
                    </BulletsContainer>
                    <LinkAndInfo>
                        <StyledLink to={link}>
                            <StyledButton>{btnText}</StyledButton>
                        </StyledLink>
                        <Info>{info}</Info>
                    </LinkAndInfo>
                </WhiteContainer>
            </ScholarshipContainer>
        </Container>
    )
}
