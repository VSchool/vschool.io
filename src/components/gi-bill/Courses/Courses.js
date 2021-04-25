import React from 'react'
import styled from 'styled-components'
import { blue } from '@vschool/lotus'

const CoursesContainer = styled.div`
    margin-top: 112px;
    display: grid;
    grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    grid-column-gap: 24px;
    grid-template-rows: auto;
    border: 2px dashed black;

    & > .title {
        margin-bottom: 32px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 1;
        text-align: center;
        // background: lightblue;
        // border: 1px dotted orange;

    }

    & > .description {
        // margin-bottom: 48px;
        grid-column-start: col4-start;
        grid-column-end: span col9-end;
        grid-row-start: 3;
        font-weight: normal;
        text-align: center;
        // background: lightgreen;
        // border: 1px dotted orange;

    }

    & > .subtitle {
        margin-bottom: 32px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 2;
        // background: lightpink;

        font-family: Aktiv Grotesk Ex;
        // font-style: normal;
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
        // margin-top: 48px;
        grid-column-start: left-margin;
        grid-column-end: right-margin;
        grid-row-start: 4;
        display: grid;
        grid-template-columns: [margin-left] 64px [margin-left-end c1-start] 1fr [c1-end c2-start] 1fr [c2-end c3-start] 1fr [c3-end c4-start] 1fr [c4-end c5-start] 1fr [c5-end c6-start] 1fr [c6-end c7-start] 1fr [c7-end c8-start] 1fr [c8-end c9-start] 1fr [c9-end c10-start] 1fr [c10-end c11-start] 1fr [c11-end c12-start] 1fr [c12-end margin-right-start] 64px [margin-right];
        grid-column-gap: 24px;
        grid-template-rows: auto;
        border: 1px dotted orange;
    }
`

export default function Courses(props) {
    const { prismicData } = props

    let coursesTitle = prismicData.courses_title[0].text
    let coursesSubtitle = prismicData.courses_subtitle[0].text
    let coursesDescription = prismicData.courses_description[0].text
    // let coursesSubtitle
    console.log(coursesDescription)

    return (
        <CoursesContainer>
            <h2 className={'title'}>{coursesTitle}</h2>
            <p className={'subtitle'}>{coursesSubtitle}</p>
            <p className={'description'}>{coursesDescription}</p>
            <div className={'wrapper'}>
                <p>Cards</p>
            </div>
        </CoursesContainer>
    )
}
