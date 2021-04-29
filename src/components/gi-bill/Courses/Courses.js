import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { blue } from '@vschool/lotus'

const CoursesContainer = styled.div`
    padding-top: 112px;
    padding-bottom: 112px;
    display: grid;
    grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    grid-column-gap: 24px;
    grid-template-rows: auto;
    // border: 2px dashed black;

    & > .title {
        margin-bottom: 32px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 1;
        text-align: center;
        // border: 1px dotted orange;
    }

    & > .description {
        grid-column-start: col4-start;
        grid-column-end: span col9-end;
        grid-row-start: 3;
        font-weight: normal;
        text-align: center;
        // border: 1px dotted orange;
    }

    & > .subtitle {
        margin-bottom: 32px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 2;
        font-family: Aktiv Grotesk Ex;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        color: ${blue.dark};
        // border: 1px dotted orange;
    }

    & > .wrapper {
        margin-top: 64px;
        grid-column-start: left-margin;
        grid-column-end: right-margin;
        grid-row-start: 4;
        display: flex;
        justify-content: center;
        column-gap: 24px;
    }
`

export default function Courses(props) {
    const { prismicData } = props

    let coursesTitle = prismicData.courses_title[0].text
    let coursesSubtitle = prismicData.courses_subtitle[0].text
    let coursesDescription = prismicData.courses_description[0].text

    let card1Title = prismicData.courses_card[0].courses_card_title[0].text
    let card1Description = prismicData.courses_card[0].courses_card_description[0].text
    let card1ButtonText = prismicData.courses_card[0].courses_card_button_text[0].text

    let card2Title = prismicData.courses_card[1].courses_card_title[0].text
    let card2Description = prismicData.courses_card[1].courses_card_description[0].text
    let card2ButtonText = prismicData.courses_card[1].courses_card_button_text[0].text

    return (
        <CoursesContainer>
            <h2 className={'title'}>{coursesTitle}</h2>
            <p className={'subtitle'}>{coursesSubtitle}</p>
            <p className={'description'}>{coursesDescription}</p>
            <div className={'wrapper'}>
                <Card 
                    className={'dev-card'}
                    cardType={'dev'}
                    title={card1Title}
                    description={card1Description}
                    buttonText={card1ButtonText}
                />

                <Card 
                    className={'design-card'}
                    cardType={'design'}
                    title={card2Title}
                    description={card2Description}
                    buttonText={card2ButtonText}
                />
            </div>
        </CoursesContainer>
    )
}
