import React from "react"
import styled from "styled-components"
import { gray, black, blue } from "@vschool/lotus"

const SubjectContainer = styled.div`
    width: 232px;
    margin-bottom: 56px;

    @media(min-width: 600px){
      margin-bottom: 0;
    }
`

const TitleContainer = styled.div`
    position: relative;
    height: 30px;
    margin-bottom: 8px;
`

const Title = styled.h6`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 24px;
    font-weight: 800;
    position: relative;
    z-index: 2;
`

const OrangeUnderline = styled.div`
    height: 8px;
    width: 112px;
    background-color: #ffd7b3;
    position: absolute;
    bottom: 2px;
    z-index: 1;
    left: -2px;
`

const Info = styled.p`
    color: ${gray.darker};
    font-family: "aktiv-grotesk-extended";
    font-size: 14px;
    line-height: 20px;
    font-weight: 800;
    margin-bottom: 16px;

    @media(min-width: 600px){
        height: 40px;
    }
`

const Subject = styled.p`
    color: ${gray.darkest};
    font-family: "aktiv-grotesk";
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    padding: 8px 0;
    border-top: 2px solid ${blue.lighter};
    border-bottom: ${props =>
        props.bottomLine ? "2px solid #BECAF4" : "none"};
`

export default function Module(props) {
    const {
        module_title,
        module_sub,
        subject1,
        subject2,
        subject3,
        subject4,
        subject5,
    } = props
    const subjects = [subject1, subject2, subject3, subject4, subject5]
    return (
        <SubjectContainer>
            <TitleContainer>
                <Title>{module_title.text}</Title>
                <OrangeUnderline></OrangeUnderline>
            </TitleContainer>
            <Info>{module_sub.text}</Info>
            {subjects.map((s, i, arr) =>
                s.text ? (
                    <Subject
                        key={s.text + i}
                        bottomLine={
                            !arr[i + 1] || (arr[i + 1] && !arr[i + 1].text)
                        }
                    >
                        {s.text}
                    </Subject>
                ) : (
                    ""
                )
            )}
        </SubjectContainer>
    )
}