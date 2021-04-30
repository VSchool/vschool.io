import React from "react"
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const BarContainer = styled.div`
    padding: 24px 44px;
    display: flex;
    justify-content: center;
    border-top: 2px solid blue;
    border-bottom: 2px solid blue;

    & > .stat-two {
        margin: 0 40px;
    }
`

const StatContainer = styled.div`

    & > p {
        margin-bottom: 8px;
        height: 38px;
        color: ${gray.darker};
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.25px;
        text-transform: uppercase;
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
    let statOneTitle = stats[0].outcomes_stat_title.text
    let statOneDescription = stats[0].outcomes_stat_description.text
    let statTwoTitle = stats[1].outcomes_stat_title.text
    let statTwoDescription = stats[1].outcomes_stat_description.text
    let statThreeTitle = stats[2].outcomes_stat_title.text
    let statThreeDescription = stats[2].outcomes_stat_description.text

    return (
        <BarContainer className={className}>
            <Stat title={statOneTitle} description={statOneDescription} />
            <Stat
                className={"stat-two"}
                title={statTwoTitle}
                description={statTwoDescription}
            />
            <Stat title={statThreeTitle} description={statThreeDescription} />
        </BarContainer>
    )
}
