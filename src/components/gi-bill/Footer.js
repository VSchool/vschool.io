import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import { blue, gray } from '@vschool/lotus'

const FooterContainer = styled.div`
    padding-top: 112px;
    padding-bottom: 112px;
    // display: grid;
    // grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    // grid-column-gap: 24px;
    // grid-template-rows: auto;

    // padding-top: 112px;
    // padding-bottom: 112px;
    display: grid;
    grid-template-columns: [left-margin] 64px [left-margin-end col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end col4-start] 1fr [col4-end col5-start] 1fr [col5-end col6-start] 1fr [col6-end col7-start] 1fr [col7-end col8-start] 1fr [col8-end col9-start] 1fr [col9-end col10-start] 1fr [col10-end col11-start] 1fr [col11-end col2-start] 1fr [col12-end right-margin-start] 64px [right-margin];
    grid-column-gap: 24px;
    grid-template-rows: auto;

    background: ${blue.lightest};
    // border: 2px dashed black;

    & > .title {
        margin-bottom: 24px;
        grid-column: col4-start / col9-end;
        grid-row: 1 / 2;

        // font-family: Aktiv Grotesk;
        // font-style: normal;
        // font-weight: 900;
        // font-size: 44px;
        // line-height: 48px;
        text-align: center;
        color: ${gray.darkest};
        // border: 2px dashed orange;
    }

    & > .description {
        margin-bottom: 40px;
        grid-column: col4-start / col9-end;
        grid-row: 2 / 2;
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        color: ${gray.darker};
        // border: 2px dashed orange;
    }

    & > .footer-form {
        grid-column: col4-start / col9-end;
        grid-row: 3 / 3;
    }
`

export default function Footer(props) {
    const { prismicData } = props
    // console.log(1111, prismicData)

    let footerTitle = prismicData.footer_title[0].text
    let footerDescription = prismicData.footer_description[0].text
    let buttonText = prismicData.footer_button_text[0].text

    let input1Label = prismicData.footer_form[0].footer_form_label[0].text
    let input1Placeholder = prismicData.footer_form[0].footer_form_placeholder[0].text
    const input1 = { label: input1Label, placeholder: input1Placeholder}

    let input2Label = prismicData.footer_form[1].footer_form_label[0].text
    let input2Placeholder = prismicData.footer_form[1].footer_form_placeholder[0].text
    const input2 = { label: input2Label, placeholder: input2Placeholder}


    let input3Label = prismicData.footer_form[2].footer_form_label[0].text
    let input3Placeholder = prismicData.footer_form[2].footer_form_placeholder[0].text
    const input3 = { label: input3Label, placeholder: input3Placeholder}

    let input4Label = prismicData.footer_form[3].footer_form_label[0].text
    let input4Placeholder = prismicData.footer_form[3].footer_form_placeholder[0].text
    const input4 = { label: input4Label, placeholder: input4Placeholder}

    const inputArr = [input1, input2, input3, input4]
    // console.log(input1, input2, input3, input4)

    return (
        <FooterContainer className={'footer-form'}>
            <h2 className={'title'}>{footerTitle}</h2>
            <p className={'description'}>{footerDescription}</p>
            <Form 
                className={'footer-form'} 
                buttonText={buttonText}
                input1={input1}
                input2={input2}
                input3={input3}
                input4={input4}
            />
        </FooterContainer>
    )
}
