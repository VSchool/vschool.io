import React from 'react'
import styled from 'styled-components'
// import { gray } from '@vschool/lotus'

const OutcomesContainer = styled.div`
    // display: grid;
    // grid-template-columns: [left-margin-start] 88px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 88px [right-margin-end];
    // grid-template-rows: 96px auto;
    border: 2px dashed black;

    & > .title {
        // grid-column-start: col3-start;
        // grid-column-end: span col11-start;
        // grid-row-start: 1;
        // text-align: center;
        background: lightblue;
    }

    & > .description {
        // grid-column-start: col3;
        // grid-column-end: span col11-start;
        // grid-row-start: 2;
        font-weight: normal;
        // text-align: center;
        background: lightgreen;
    }
`

export default function Outcomes(props) {
    const { prismicData } = props    

    let outcomesTitle = prismicData.outcomes_title[0].text
    let outcomesDescription = prismicData.outcomes_description[0].text

    console.log(prismicData)

    return (
        <OutcomesContainer>
            <h2 className={'title'}>{outcomesTitle}</h2>
            <p className={'description'}>{outcomesDescription}</p>
        </OutcomesContainer>
    )
}
