import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from '@reach/router'
import { gray } from "@vschool/lotus"


const ResourcesContainer = styled.section`
    padding-top: 112px;
    padding-bottom: 112px;
    max-width: 950px;
    margin: auto;
`

const ResourcesTitle = styled.h2`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    margin-bottom: 64px;

    @media (min-width: 800px){
        font-size: 44px;
        line-height: 48px;
    }
`

const CalloutContainer = styled.div`
    width: 100%;
    padding: 40px;
    background: #F0EEEB;
    margin-bottom: 48px;
`

const CalloutTitle = styled.h3`
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};

    @media (min-width: 800px){
        font-size: 32px;
        line-height: 40px;
    }
`

const CalloutDescription = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    @media (min-width: 800px){
        font-size: 20px;
        line-height: 32px;
    }
`

const CalloutButton = styled.button`
    padding: 18px 44px;
    border: 2px solid ${gray.darkest};
    background-color: ${gray.darker};
    text-decoration: none;
    color: ${gray.lightest};
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-weight: 800;

    &:hover {
        box-shadow: none;
    }

    &:active {
        border: 2px solid ${gray.dark};
    }
`

export default function AdditionalResources(props) {
    const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
            resources_callout {
                resources_callout_button_text {
                    text
                }
                resources_callout_description {
                    text
                }
                resources_callout_title {
                    text
                }
            }
            resources_title {
                text
            }
        }
      }
    }
  `)

  const {
    resources_callout,
    resources_title: {text: resourcesTitle},
  } = {...data.prismicVeteransLandingPage.data}

   const mappedResources = resources_callout.map(({
        resources_callout_button_text: { text: calloutBtn},
        resources_callout_description: { text: calloutDescription},
        resources_callout_title: { text: calloutTitle},
   }) => {
        return <CalloutContainer>
            <CalloutTitle>{calloutTitle}</CalloutTitle>
            <CalloutDescription>{calloutDescription}</CalloutDescription>
            <CalloutButton 
                onClick={() => navigate(calloutTitle.split(' ').includes('Military') || calloutTitle.split(' ').includes('Forever') ? '/scholarships/veteran-forever-scholarship' : '/bootcamp-primer')}
            >{calloutBtn}</CalloutButton>
        </CalloutContainer>
   })

    return (
        <ResourcesContainer>
            <ResourcesTitle>{resourcesTitle}</ResourcesTitle>
            {mappedResources}
        </ResourcesContainer>
    )
}
