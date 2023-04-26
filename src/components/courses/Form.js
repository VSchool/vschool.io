import React, { useState } from "react"
import styled from "styled-components"
import { blue, gray, TextInput, Button } from "@vschool/lotus"

const Section = styled.section`
    padding-bottom: 160px;
`

const FormContainer = styled.div`
    background-color: ${blue.lightest};
    padding: 32px 52px;
    border: 2px solid ${blue.base};
    max-width: 500px;

    @media (min-width: 800px) {
        padding: 32px;
    }
`

const FormSubtitle = styled.h3`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${gray.darkest};
`

const FormTitle = styled.h2`
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: ${gray.darkest};
    margin-bottom: 64px;

    @media (min-width: 800px) {
        font-size: 32px;
        line-height: 40px;
    }
`

const Image = styled.img`
    width: 96px;
    margin: 23px auto;
    display: block;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 450px;
    margin: auto;

    & > div {
        margin-bottom: 24px;
    }
`

const StyledButton = styled(Button)`
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1px;
    color: #ffffff;
    margin-top: 43px;
    margin-bottom: 64px;
    @media (max-width: 599px) {
        margin-bottom: 97px;
        width: 100%;
    }
`

export default function ApplicationForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [downloaded, setDownloaded] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name,
            email,
            phone,
            convertKitTag: props.form_convertkit_tag,
        }

        const options = {
            method: "POST",
            body: JSON.stringify(formData),
        }

        await fetch(
            process.env.GATSBY_CONVERTKIT_SIGNUP_ZAPIER_WEBHOOK_URL,
            options
        )

        var link = document.createElement("a")
        link.href =
            props.form_convertkit_tag === "syllabus dl - ux/ui design"
                ? "https://drive.google.com/file/d/1lF1qMnhwLn1gaqefjSqS2AWxV_qXjHRQ/view?usp=sharing"
                : props.form_convertkit_tag === "syllabus dl - web dev"
                ? "https://drive.google.com/file/d/1TkmbmHhJXIyvH8rRr2UeIe7KhD14d1nz/view"
                : "https://drive.google.com/file/d/13vzcj7MXMraKl4HvgvkgThln8zKGku50/view?usp=sharing"
        link.target = "_blank"
        link.download = "V School Syllabus"

        document.body.appendChild(link)

        link.click()
        setTimeout(function() {
            window.URL.revokeObjectURL(link)
        }, 200)

        setDownloaded(true)
    }

    const {
        form_button: { text: formBtn },
        form_image: { alt: formAlt, url: formUrl },
        form_inputs,
        form_subtitle: { text: formSubtitle },
        form_title: { text: formTitle },
    } = props

    const mappedInputs = form_inputs.map(
        (
            {
                form_label: { text: label },
                form_placeholder: { text: placeholder },
            },
            i
        ) => (
            <TextInput
                type="text"
                label={label}
                name={i === 0 ? "name" : i === 1 ?  "email" : "phone"}
                placeholder={placeholder}
                value={i === 0 ? name : i === 1 ? email : phone}
                onChange={
                    i === 0
                        ? e => setName(e.target.value) 
                        : i === 1 
                        ? e => setEmail(e.target.value)
                        : e => setPhone(e.target.value)
                }
                required={i === 2 ? false : true}
            />
        )
    )
    return (
        <Section>
            <FormContainer>
                {downloaded ? (
                    <h1 style={{ fontSize: 15 }}>
                        Successfully Downloaded Syllabus
                    </h1>
                ) : (
                    <>
                        <Image src={formUrl} alt={formAlt} />
                        <FormSubtitle>{formSubtitle}</FormSubtitle>
                        <FormTitle>{formTitle}</FormTitle>
                        <Form onSubmit={handleSubmit}>
                            {mappedInputs}
                            <StyledButton size="lg">{formBtn}</StyledButton>
                        </Form>
                    </>
                )}
            </FormContainer>
        </Section>
    )
}
