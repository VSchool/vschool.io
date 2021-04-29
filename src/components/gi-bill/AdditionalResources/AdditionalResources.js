import React from "react"
import styled from "styled-components"
import Callout from "./Callout"

const ResourcesContainer = styled.div`
    padding-top: 112px;
    padding-bottom: 112px;
    display: grid;
    grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    grid-column-gap: 24px;
    grid-template-rows: auto;
    // border: 2px dashed black;

    & > .title {
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 1;
        text-align: center;
        // border: 1px dotted orange;
    }

    & > .wrapper {
        margin-top: 40px;
        grid-column-start: col3-start;
        grid-column-end: span col10-end;
        grid-row-start: 2;
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        column-gap: 24px;
        // border: 2px solid green;
    }
`

export default function AdditionalResources(props) {
    const { prismicData } = props

    let resourcesTitle = prismicData.resources_title.text

    let callout1Title =
        prismicData.resources_callout[0].resources_callout_title.text
    let callout1Description =
        prismicData.resources_callout[0].resources_callout_description.text
    let callout1ButtonText =
        prismicData.resources_callout[0].resources_callout_button_text.text

    let callout2Title =
        prismicData.resources_callout[1].resources_callout_title.text
    let callout2Description =
        prismicData.resources_callout[1].resources_callout_description.text
    let callout2ButtonText =
        prismicData.resources_callout[1].resources_callout_button_text.text

    return (
        <ResourcesContainer>
            <h2 className={"title"}>{resourcesTitle}</h2>
            <div className={"wrapper"}>
                <Callout
                    className={"card-one"}
                    calloutTitle={callout1Title}
                    calloutDescription={callout1Description}
                    calloutButtonText={callout1ButtonText}
                />

                <Callout
                    className={"card-two"}
                    calloutTitle={callout2Title}
                    calloutDescription={callout2Description}
                    calloutButtonText={callout2ButtonText}
                />
            </div>
        </ResourcesContainer>
    )
}
