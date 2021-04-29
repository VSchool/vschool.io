import React from "react"
import styled from "styled-components"
import StatsBar from "./StatsBar"
import { gray, blue } from "@vschool/lotus"

const OutcomesContainer = styled.div`
    padding: 112px 90px;

    & > .content-wrapper {

        & > .sub-wrapper {
            background: ${blue.darkest};
            position: relative;
            padding-bottom: 87px;
            margin-left: -90px;
            width: 70%;
            max-height: 700px;

            & > .sub-title {
                font-weight: 900;
                font-size: 32px;
                line-height: 40px;
                margin-top: 56px;
                margin-bottom: 40px;
                color: ${gray.lighter};
                padding: 87px 87px 0;
            }

            & > .section-image {
                position: absolute;
                top: 150px;
                left: 89%;
                width: 100%;
                max-width: 400px;          
            }
        }
    }
`

const SubDescription = styled.div`
    & > p {
                padding: 0 87px;
                max-width: 675px;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 24px;
                color: ${gray.base};
            }
`

const NumbersDiv = styled.div`
    max-width: 80%;
    margin: auto;

    & > .title {
        max-width: 670px;
        margin: 16px auto;
        text-align: center;
    }

    & > .description {
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        color: ${gray.darker};
        margin: 0 auto 48px;
        max-width: 795px;
        text-align: center;
    }

    & > .stats-bar {
        margin-bottom: 104px;
    }
`

export default function Outcomes(props) {
    const { prismicData } = props
    console.log(prismicData.outcomes_subdescription)

    let outcomesTitle = prismicData.outcomes_title.text
    let outcomesDescription = prismicData.outcomes_description.text
    let outcomesStatistics = prismicData.outcomes_statistics
    let outcomesSubTitle = prismicData.outcomes_subtitle.text
    let outcomesSubDescription = prismicData.outcomes_subdescription.html
    let outcomesImage = prismicData.outcomes_image

    return (
        <OutcomesContainer>
            <NumbersDiv>
                <h2 className={'title'}>{outcomesTitle}</h2>
                <p className={'description'}>{outcomesDescription}</p>
                <StatsBar className={'stats-bar'} stats={outcomesStatistics} />
            </NumbersDiv>
            <div className={'content-wrapper'}>
                <div className={'sub-wrapper'}>
                    <h3 className={'sub-title'}>{outcomesSubTitle}</h3>
                    <SubDescription dangerouslySetInnerHTML={{ __html: outcomesSubDescription }} />
                    <img className={'section-image'} src={outcomesImage.url} alt={outcomesImage.alt} />
                </div>
            </div>
        </OutcomesContainer>
    )
}
