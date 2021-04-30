import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from '@vschool/lotus'

const FooterContainer = styled.div`
    padding-top: 112px;
    padding-bottom: 112px;
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
        text-align: center;
        color: ${gray.darkest};
        // border: 2px dashed orange;
    }

    & > .description {
        margin-bottom: 40px;
        grid-column: col4-start / col9-end;
        grid-row: 2 / 2;
        font-weight: normal;
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
    const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
            footer_button_text {
                text
            }
            footer_description {
                text
            }
            footer_form {
                footer_form_label {
                    text
                }
                footer_form_placeholder {
                    text
                }
            }
            footer_title {
                text
            }
        }
      }
    }
  `)

  const {
    footer_button_text: {text: buttonText},
    footer_description: {text: footerDescription},
    footer_form,
    footer_title: {text: footerTitle},
  } = {...data.prismicVeteransLandingPage.data}


    return (
        <FooterContainer className={'footer-form'}>
            <h2 className={'title'}>{footerTitle}</h2>
            <p className={'description'}>{footerDescription}</p>

            <Form formInfo={footer_form} buttonText={buttonText} type='footer' />
        </FooterContainer>
    )
}
