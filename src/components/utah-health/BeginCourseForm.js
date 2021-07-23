import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { white } from "@vschool/lotus"
import ConvertKitSubscribe from "../shared/ConvertKitSubscribe"

const FormContainer = styled.div`
    position: relative;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;
    padding-bottom: 380px;
    padding-top: 96px;
`

const Form = styled(ConvertKitSubscribe)`
    background-color: #ac162c;
    border: 2px solid #fa0037;
    color: ${white};

    & label,
    & label::before,
    & p {
        color: white;
    }
`

function ConvertKitSubscribeForm() {
    const data = useStaticQuery(graphql`
        {
            prismicUofuPrimer {
                data {
                    convertkit_tag
                }
            }
        }
    `)
    const { convertkit_tag: convertKitTag } = data.prismicUofuPrimer.data

    return (
        <FormContainer>
            <Form convertKitTag={convertKitTag} />
        </FormContainer>
    )
}

export default ConvertKitSubscribeForm
