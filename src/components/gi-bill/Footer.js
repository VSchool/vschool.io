import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray } from '@vschool/lotus'

const FooterContainer = styled.section`
    padding-top: 112px;
    padding-bottom: 112px;
    background: ${blue.lightest};
`

const FooterDiv = styled.div`
    max-width: 500px;
    margin: auto;
`

const FooterTitle = styled.h1`
    margin-bottom: 24px;
    color: ${gray.darkest};
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
`

const FooterDescription = styled.p`
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 32px;
    color: ${gray.darker};
    font-weight: normal;
`

export default function Footer(props) {
    const data = useStaticQuery(graphql`
    {
      prismicVeteransLandingPage {
        data {
            hero_form_icon {
                alt
                url
            }
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
    hero_form_icon:{
        alt: iconAlt,
        url: iconUrl
    },
    footer_title: {text: footerTitle},
  } = {...data.prismicVeteransLandingPage.data}

    return (
        <FooterContainer className={'footer-form'}>
            <FooterDiv>
                <FooterTitle>{footerTitle}</FooterTitle>
                <FooterDescription>{footerDescription}</FooterDescription>
                <Form formInfo={footer_form} buttonText={buttonText} type='footer' icon={{iconAlt, iconUrl}} />
            </FooterDiv>
        </FooterContainer>
    )
}
