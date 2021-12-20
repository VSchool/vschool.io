import React from "react"
import styled from "styled-components"
import { gray, blue, Button } from "@vschool/lotus"
import { useStaticQuery, graphql } from "gatsby"
import Form from '../form'
import { FormContext } from "../FormContext"

const Container = styled.section`
    background-color: ${gray.lighter};
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 16px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding-bottom: 24px;
    }
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding-top: 64px;
    padding-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-top: 96px;
        padding-bottom: 16px;
    }
`

const Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darker};
    padding-bottom: 48px;
    max-width: 630px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 64px;
    }
`

const Subtitle = styled.p`
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darkest};
    padding-bottom: 16px;

    & > b {
        font-weight: 800;
    }

    
    @media (min-width: 800px){
        font-size: 24px;
        line-height: 32px;
        padding-bottom: 24px;
    }
`

const Image = styled.img`
    max-width: 300px;

    @media (min-width: 800px){
        max-width: 550px;
    }
`

const StyledButton = styled(Button)`
    width: 300px;
    margin-top: 16px;
    margin-bottom: 96px;

    @media (min-width: 800px){
        width: 330px;
        margin-top: 24px;
        margin-bottom: 160px;
    }
`

const Hero = ({page, setter}) => {
    const data = useStaticQuery(graphql`
    {
      prismicCompletionForm {
        data {
          intro_blue_subtext {
            text
          }
          intro_button_arrow {
            alt
            url
          }
          intro_button_text {
            text
          }
          intro_description {
            text
          }
          intro_sub_description {
            text
          }
          intro_swag_pic {
            url
          }
          intro_title {
            text
          }
        }
      }
    }
  `)

    const {
        intro_blue_subtext: { text: blueSub },
        intro_button_arrow: { url: arrowUrl },
        intro_button_text: { text: btnText },
        intro_description: { text: desc },
        intro_sub_description: { text: subDesc },
        intro_swag_pic: { url: swagUrl },
        intro_title: { text: title },
    } = data.prismicCompletionForm.data

    const submit = num => {
        setter(num)
        localStorage.setItem('pageNum', num)
    }
    return (
        <Container>
           {
               page == 0 ?
               <>
                    <BlueSubtext>{blueSub}</BlueSubtext>
                    <Title>{title}</Title>
                    <Paragraph>{desc}</Paragraph>
                    <Subtitle>Complete the form to receive a <b>V School hoodie</b></Subtitle>
                    <Image src={swagUrl} />
                    <StyledButton onClick={() => submit(1)}>{btnText}</StyledButton>
               </>
               :
               page == 1 && 
               <>
                    <FormContext>
                        <Form />
                    </FormContext>
               </>

           }
        </Container>
    )
}

export default Hero
