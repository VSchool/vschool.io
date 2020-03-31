import React from "react"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"

const DeadlinesContainer = styled.div`
    background-image: url(${props => props.bgImg});
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;

    max-width: 600px;
  
    height: 500px;

    @media (min-width: 1200px) {
        width: 1024px;
        max-width: 1024px;
        height: 138px;
    }
`

const DeadlinesBox = styled.div`
    background-color: ${gray.lighter};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    height: 100%;
    width: 100%;

    @media (max-width: 360px){
   
    }

    @media (min-width: 1200px) {
        width: 992px;
        height: 106px;
    }
`

const List = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const Deadline = styled.div`

    @media(min-width: 1200px){
      height: 60px;
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

    @media(min-width: 1200px){
      text-align: left;
    }
`

const DateText = styled.h2`
    color: ${blue.dark};
    font-family: "aktiv-grotesk-extended";
    font-size: 22px;
    line-height: 26px;
    font-weight: 800;
    text-align: center;

    @media(min-width: 400px){
      font-size: 24px;
    }

    @media(min-width: 1200px){
      text-align: left;
    }
`

export default function Deadlines(props) {
    const { deadlines, bgImg, info } = props
    return (
        <DeadlinesContainer bgImg={bgImg}>
            <DeadlinesBox>
                <List>
                    {deadlines.map(({ detail_title: title, detail_date: date }, i) => (
                        <Deadline key={title.text + i}>
                            <Title>{title.text}</Title>
                            <DateText>{date.text}</DateText>
                        </Deadline>
                    ))}
                </List>
            </DeadlinesBox>
        </DeadlinesContainer>
    )
}
