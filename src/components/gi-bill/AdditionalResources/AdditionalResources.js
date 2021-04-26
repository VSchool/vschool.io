import React from 'react'
import styled from 'styled-components'

const ResourcesContainer = styled.div`
    margin-top: 112px;
    display: grid;
    grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    grid-column-gap: 24px;
    grid-template-rows: auto;
    border: 2px dashed black;

    & > .title {
        // margin-bottom: 32px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 1;
        text-align: center;
        // border: 1px dotted orange;
    }
`

export default function AdditionalResources(props) {
    const { prismicData } = props
    // console.log(prismicData)

    let resourcesTitle = prismicData.resources_title[0].text
    console.log(resourcesTitle)

    return (
        <ResourcesContainer>
            <h2 className={'title'}>{resourcesTitle}</h2>
        </ResourcesContainer>
    )
}
