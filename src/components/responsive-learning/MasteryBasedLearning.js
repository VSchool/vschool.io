import React from "react"
import styled from "styled-components"
import { gray, green, purple, black } from "@vschool/lotus"

const Container = styled.div`
    padding-top: 96px;
    background-color: ${gray.lightest};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 840px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 96px;
        padding-top: 96px;
    }

    @media (min-width: 1200px) {
        padding-left: 88px;
        padding-right: 88px;
    }
`

const HeaderContainer = styled.div`
    position: relative;
`

const Header = styled.h2`
    position: relative;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    width: 100%;
    max-width: 366px;
    z-index: 2;
`

const GreenUnderline = styled.span`
    position: absolute;
    background-color: ${green.lighter};
    height: 24px;
    width: 197px;
    left: 8px;
    top: 24px;
    z-index: 1;
`

const SubHeader = styled.h4`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: ${purple.darker};
    margin-top: 16px;
    width: 100%;
    max-width: 366px;
    text-align: center;
`

const Description = styled.p`
    width: 100%;
    max-width: 366px;
    margin-top: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-family: "aktiv-grotesk";
    color: ${gray.darker};
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 64px;

    & div:nth-child(1){
      margin-bottom: 64px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 378px;
`

const InfoHeader = styled.h4`
    font-family: "aktiv-grotesk";
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: ${black};
    width: 100%;
    max-width: 365px;
`

const InfoImg = styled.img`
    width: 100%;
    max-width: 378px;
    margin-top: 32px;
`

const InfoText = styled.p`
    width: 100%;
    max-width: 370px;
    margin-top: 16px;
    font-weight: 500;
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 16px;
    line-height: 24px;
`

export default function MasterBasedLearning(props) {
    const { header, subHeader, description, info } = props
    return (
        <Container>
            <HeaderContainer>
                <Header>{header}</Header>
                <GreenUnderline />
            </HeaderContainer>
            <SubHeader>{subHeader}</SubHeader>
            <Description>{description}</Description>
            <InfoContainer>
                {info.map(item => (
                    <Info key={item.header.text}>
                        <InfoHeader>{item.header.text}</InfoHeader>
                        <InfoImg src={item.graph.url} />
                        <InfoText>{item.info.text}</InfoText>
                    </Info>
                ))}
            </InfoContainer>
        </Container>
    )
}
