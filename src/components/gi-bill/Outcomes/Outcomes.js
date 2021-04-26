import React from 'react'
import styled from 'styled-components'
import StatsBar from './StatsBar'
import { gray, blue } from '@vschool/lotus'

const OutcomesContainer = styled.div`
    // margin-top: 112px;
    padding-top: 112px;
    padding-bottom: 112px;
    display: grid;
    grid-template-columns: [left-margin-start] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin-end];
    grid-column-gap: 24px;
    grid-template-rows: auto;
    // border: 2px dashed black;

    & > .title {
        margin-bottom: 16px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 1;
        text-align: center;
        // background: lightblue;
    }

    & > .description {
        margin-bottom: 48px;
        grid-column-start: col2-start;
        grid-column-end: span col11-end;
        grid-row-start: 2;
        font-weight: normal;
        text-align: center;
        // background: lightgreen;
    }

    & > .stats-bar {
        margin-bottom: 104px;
        grid-column-start: col2-start;
        grid-column-end: col11-end;
        grid-row-start: 3;
    }

    & > .content-wrapper {
        grid-column-start: left-margin-start;
        grid-column-end: right-margin-end;
        grid-row-start: 4;
        display: grid;
        grid-template-columns: 
            [start] 88px [c1-start] 1fr [c2-start] 1fr [c3-start] 1fr [c4-start] 1fr [c5-start] 1fr [c6-start] 1fr [c7-start] 1fr [c8-start] 1fr [c9-start] 1fr [c10-start] 1fr [c11-start] 1fr [c12-start] 1fr 88px [end];
        grid-column-gap: 24px;  

        & > .sub-wrapper {
            grid-column-start: start;
            grid-column-end: c10-start;
            display: grid;
            grid-template-columns: 
                [start] 88px [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr  [ten] 1fr  [eleven] 1fr  [twelve] 1fr 88px [end];
            grid-column-gap: 24px;
            grid-template-rows: auto;
            position: relative;
            background: ${blue.darkest};

            & > .sub-title {
                margin-top: 56px;
                grid-column-start: one;
                grid-column-end: twelve;
                grid-row-start: 1;
                margin-bottom: 40px;
                color: ${gray.light};
                // border: 2px dotted orange;
            }

            & > .sub-description {
                margin-bottom: 56px;
                grid-column-start: one;
                grid-column-end: twelve;
                grid-row-start: 2;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                color: ${gray.light};
                // border: 2px dotted orange;
            }

            & > .section-image {
                position: absolute;
                top: calc(50% - 320px/2);
                right: -276px;
                height: 320px;  
                // border: 2px solid red;              
            }
        }
    }
`

export default function Outcomes(props) {
    const { prismicData } = props

    let outcomesTitle = prismicData.outcomes_title[0].text
    let outcomesDescription = prismicData.outcomes_description[0].text
    let outcomesStatistics = prismicData.outcomes_statistics
    let outcomesSubTitle = prismicData.outcomes_subtitle[0].text
    let outcomesSubDescription = prismicData.outcomes_subdescription[0].text
    let outcomesImage = prismicData.outcomes_image

    return (
        <OutcomesContainer>
            <h2 className={'title'}>{outcomesTitle}</h2>
            <p className={'description'}>{outcomesDescription}</p>
            <StatsBar className={'stats-bar'} stats={outcomesStatistics} />
            <div className={'content-wrapper'}>
                <div className={'sub-wrapper'}>
                    <h3 className={'sub-title'}>{outcomesSubTitle}</h3>
                    <p className={'sub-description'}>{outcomesSubDescription}</p>
                    <img className={'section-image'} src={outcomesImage.url} alt={outcomesImage.alt} />
                </div>
            </div>
        </OutcomesContainer>
    )
}
