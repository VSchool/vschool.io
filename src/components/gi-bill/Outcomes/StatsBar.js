import React from 'react'
import styled from 'styled-components'
import { blue, gray } from '@vschool/lotus'

const BarContainer = styled.div`
    padding: 24px 44px 24px 44px;
    display: flex;
    justify-content: center;
    border-top: 2px solid blue;
    border-bottom: 2px solid blue;

    & > .stat-two {
        margin-left: 24px;
        margin-right: 24px;
        // background: black;
    }
`

const StatContainer = styled.div`
    width: 232px;
    // border: 1px dashed orange;

    & > p {
        margin-bottom: 8px;
        height: 48px;
        color: ${gray.darker};
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        // background: lightblue;
    }

    & > h1 {
        color: ${blue.darker};
        font-size: 56px;
        line-height: 56px;
        text-align: center;
        // background: lightgreen;
    }
`

function Stat(props) {
    const { title, description, className } = props

    return (
        <StatContainer className={className}>
            <p>{title}</p>
            <h1>{description}</h1>
        </StatContainer>
    )
}

export default function StatsBar(props) {
    const { stats, className } = props
    let statOneTitle = stats[0].outcomes_stat_title[0].text
    let statOneDescription = stats[0].outcomes_stat_description[0].text
    let statTwoTitle = stats[1].outcomes_stat_title[0].text
    let statTwoDescription = stats[1].outcomes_stat_description[0].text
    let statThreeTitle = stats[2].outcomes_stat_title[0].text
    let statThreeDescription = stats[2].outcomes_stat_description[0].text

    return (
        <BarContainer className={className}>
            <Stat title={statOneTitle} description={statOneDescription} />
            <Stat className={'stat-two'} title={statTwoTitle} description={statTwoDescription} />
            <Stat title={statThreeTitle} description={statThreeDescription}/>
        </BarContainer>
    )
}
