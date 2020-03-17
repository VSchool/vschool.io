import React from "react"
import styled from "styled-components"
import { gray, green, Button } from "@vschool/lotus"

const DeadlinesContainer = styled.div`
    background-image: url(${props => props.bgImg});
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    max-width: 600px;
    width: 100%;


    @media (min-width: 1200px) {
        width: 1024px;
        max-width: 1024px;
    }
`

const DeadlinesBox = styled.div`
    background-color: ${gray.lighter};
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 100%;

    @media (min-width: 1200px) {
        width: 992px;
        padding: 40px 32px;
    }
`

const List = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const Deadline = styled.div`
    margin-bottom: 24px;
    @media (min-width: 1200px) {
        height: 60px;
        margin-bottom: 16px;
    }
`

const Title = styled.h5`
    color: ${gray.darker};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 4px;
    text-align: center;

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const DateText = styled.h2`
    color: ${green.darker};
    font-family: "aktiv-grotesk-extended";
    font-size: 22px;
    line-height: 26px;
    font-weight: 800;
    text-align: center;

    @media (min-width: 400px) {
        font-size: 24px;
    }

    @media (min-width: 1200px) {
        text-align: left;
    }
`

const DetailsContainer = styled.div`
    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

const Detail = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    margin-top: 16px;

    @media (min-width: 600px) {
        font-size: 16px;
    }
`

const Icon = styled.img`
    height: 16px;
    width: 20px;
    margin-right: 4px;
`

const ApplyContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;

    @media (min-width: 600px) {
        flex-direction: row;
    }
`

const Info = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;

    @media(min-width: 1200px){
        max-width: 320px;
    }
`

const StyledButton = styled(Button)`
    width: 136px;
    max-width: 136px;
    min-width: 136px;
    margin-bottom: 16px;

    font-family: "aktiv-grotesk-extended";
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.43px;
    line-height: 14px;
    text-align: center;

    @media (min-width: 600px) {
        margin-bottom: 0;
        margin-right: 16px;
    }
`

export default function Deadlines(props) {
    const { deadlines, bgImg, info, details, link, btnText } = props
    return (
        <DeadlinesContainer bgImg={bgImg}>
            <DeadlinesBox>
                <List>
                    {deadlines.map(({ title, date }, i) => (
                        <Deadline key={title.text + i}>
                            <Title>{title.text}</Title>
                            <DateText>{date.text}</DateText>
                        </Deadline>
                    ))}
                </List>
                <DetailsContainer>
                    {details.map(detail => (
                        <Detail key={detail.detail.text}>
                            <Icon src={detail.checkmark.url} />
                            {detail.detail.text}
                        </Detail>
                    ))}
                </DetailsContainer>
                <ApplyContainer>
                    <a href={link}>
                        <StyledButton>{btnText}</StyledButton>
                    </a>
                    <Info>{info}</Info>
                </ApplyContainer>
            </DeadlinesBox>
        </DeadlinesContainer>
    )
}
