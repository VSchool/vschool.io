import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import { gray, red, blue } from '@vschool/lotus'

const HeroContainer = styled.div`
    padding-top: 112px;
    padding-bottom: 112px;
    display: grid;
    grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    grid-column-gap: 24px;
    grid-template-rows: auto;
    background: ${blue.lightest};
    // border: 2px dashed black;

    & > .title {
        grid-column-start: col1-start;
        grid-column-end: span col9-end;
        grid-row-start: 2;
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: 900;
        font-size: 56px;
        line-height: 56px;
        color: ${gray.darkest};
        // border: 2px solid orange;
    }

    & > .tagline {
        grid-column-start: col1-start;
        grid-column-end: span col2-end;
        grid-row-start: 1;
        font-family: Aktiv Grotesk Ex;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        color: ${red.dark};        
        // border: 2px dotted orange;
    }

    & > .wrapper {
        margin-top: 48px;
        grid-column-start: left-margin;
        grid-column-end: right-margin;
        grid-row-start: 3;
        display: grid;
        grid-template-columns: [margin-left] 64px [margin-left-end c1-start] 1fr [c1-end c2-start] 1fr [c2-end c3-start] 1fr [c3-end c4-start] 1fr [c4-end c5-start] 1fr [c5-end c6-start] 1fr [c6-end c7-start] 1fr [c7-end c8-start] 1fr [c8-end c9-start] 1fr [c9-end c10-start] 1fr [c10-end c11-start] 1fr [c11-end c12-start] 1fr [c12-end margin-right-start] 64px [margin-right];
        grid-column-gap: 24px;
        grid-template-rows: auto;
        // border: 2px dotted blue;

        & > .description {
            margin-bottom: 24px;
            grid-column-start: c1-start;
            grid-column-end: span c6-end;
            grid-row-start: 1;
            font-family: Aktiv Grotesk;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 32px;
            color: ${gray.darker};
            // border: 2px dotted orange;
        }

        & > .hero-form {
            grid-column-start: c1-start;
            grid-column-end: span c6-end;
            grid-row-start: 2;
        }
    }
`

export default function Hero(props) {
    const { prismicData } = props
    
    let heroTitle = prismicData.hero_title[0].text
    let heroSubtitle = prismicData.hero_subtitle[0].text
    let heroDescription = prismicData.hero_description[0].text
    let buttonText = prismicData.hero_form_button[0].text

    let input1Label = prismicData.hero_form[0].hero_form_label[0].text
    let input1Placeholder = prismicData.hero_form[0].hero_form_placeholder[0].text
    const input1 = { label: input1Label, placeholder: input1Placeholder}

    let input2Label = prismicData.hero_form[1].hero_form_label[0].text
    let input2Placeholder = prismicData.hero_form[1].hero_form_placeholder[0].text
    const input2 = { label: input2Label, placeholder: input2Placeholder}

    let input3Label = prismicData.hero_form[2].hero_form_label[0].text
    let input3Placeholder = prismicData.hero_form[2].hero_form_placeholder[0].text
    const input3 = { label: input3Label, placeholder: input3Placeholder}

    let input4Label = prismicData.hero_form[3].hero_form_label[0].text
    let input4Placeholder = prismicData.hero_form[3].hero_form_placeholder[0].text
    const input4 = { label: input4Label, placeholder: input4Placeholder}

    return (
        <HeroContainer>
            <p className={'tagline'}>{heroSubtitle}</p>
            <h3 className={'title'}>{heroTitle}</h3>
            <div className={'wrapper'}>
                <p className={'description'}>{heroDescription}</p>
                <Form 
                    className={'hero-form'} 
                    buttonText={buttonText}
                    input1={input1}
                    input2={input2}
                    input3={input3}
                    input4={input4}
            />
            </div>
        </HeroContainer>
    )
}
