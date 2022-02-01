import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { navigate } from "gatsby"
import {
    gray,
    blue,
    TextInput,
    Checkbox,
    CheckboxRadioGroup,
    Textarea,
    Button,
} from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    max-width: 700px;
    margin: auto;
    padding: 0px 40px 64px;

    @media (min-width: 800px) {
        padding: 0px 80px 160px;
    }
`

const Title = styled.h1`
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    font-weight: 900;
    color: ${gray.darkest};
    padding: 8px 0 16px;

    @media (min-width: 800px) {
        font-size: 44px;
        line-height: 48px;
        padding: 16px 0 24px;
    }
`

const Paragraph = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: ${gray.darker};
    padding-bottom: 24px;

    @media (min-width: 800px) {
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 32px;
    }
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding-top: 64px;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-top: 96px;
    }
`

const FormContainer = styled.form`
    background-color: ${blue.lightest};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 1px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid ${blue.light};
    padding: 64px;
    width: 100%;
    max-width: 900px;
`

const StyledTextInput = styled(TextInput)`
    margin-bottom: 20px;

    & > label {
        display: none;
    }
`

const StyledLabel = styled.label`
    background-image: url(${props => props.required});
    padding: 0 10px;
    background-repeat: no-repeat;
    font-weight: ${props => (props.font ? "normal" : "bold")};
    font-size: 12px;
    line-height: 16px;
`

const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;

    @media (min-width: 800px) {
    }
`

const StyledCheckbox = styled(Checkbox)`
    & label {
        font-size: 0.9em;
    }
`

const StyledTextarea = styled(Textarea)`
    margin: 10px 0 30px;

    & > label {
        display: none;
    }
`

const StyledButton = styled(Button)`
    @media (min-width: 800px) {
        width: 268px;
        height: 56px;
        font-size: 14px;
    }
`

const Form = (props) => {

    const data = useStaticQuery(graphql`
        {
            prismicPrecoursePartners {
                data {
                    form_button_text {
                        text
                    }
                    form_company {
                        text
                    }
                    form_company_numbers {
                        text
                    }
                    form_email {
                        text
                    }
                    form_full_name {
                        text
                    }
                    form_numbers {
                        form_number {
                            text
                        }
                    }
                    form_position {
                        text
                    }
                    form_required {
                        alt
                        url
                    }
                    form_why {
                        text
                    }
                    form_title {
                        text
                    }
                    form_subtitle {
                        text
                    }
                    form_step_info {
                        text
                    }
                    form_description {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_why: { text: why },
        form_company: { text: fCompany },
        form_position: { text: fPosition },
        form_company_numbers: { text: fCompanyNums },
        form_numbers,
        form_full_name: { text: fFName },
        form_email: { text: fEmail },
        form_button_text: { text: fBtnText },
        form_required: { url: reqUrl },
        form_title: { text: fTitle },
        form_subtitle: { text: fSub },
        form_description: { text: fDesc },
    } = data.prismicPrecoursePartners.data


    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        companySize: [],
        why: "",
    })

    const handleChange = (e, title) => {
        let { name, value, type } = e.target
        if (title) {
            setInputs(prev => ({
                ...prev,
                course: title,
            }))
        } else if (type === "checkbox") {
            const checkedItems = document.querySelectorAll(
                "input[name=companySize]:checked"
            )
            const checkedArr = []
            for (let i = 0; i < checkedItems.length; i++) {
                checkedArr.push(checkedItems[i].value)
            }
            setInputs(prev => {
                return {
                    ...prev,
                    companySize: checkedArr,
                }
            })
        } else {
            setInputs(prev => ({
                ...prev,
                [name]: value,
            }))
        }
    }

    async function handleSubmit(e, type) {
        e.preventDefault()
        let { firstName, lastName, email, company, companySize, why } = inputs
        // // Get the UTM parameters if they exist to add to the POST URL below
        const formData = {
            firstName,
            lastName,
            email,
            company,
            companySize,
            why,
            convertKitTag: 'intro to tech partner sign up',
            fromLandingPage: localStorage.getItem("fromLandingPage"),
        }
        
        const options = {
                method: "POST",
                body: JSON.stringify(formData),
        }
            
        const query = localStorage.getItem("query") || ""

        try {
            await fetch(
            `${process.env.GATSBY_PRE_COURSE_COMMUNITIES_ZAPIER_WEBHOOK_URL}${query}`,
            options
        )
        } catch (e) {
            console.error(e)
        }
        navigate("/pre-course-partners/success")
    }
                        
    return (
        <Container>
            <BlueSubtext>{fSub}</BlueSubtext>
            <Title>{fTitle}</Title>
            <Paragraph>{fDesc}</Paragraph>
            <FormContainer onSubmit={handleSubmit}>
            
                <div>
                    <StyledLabel required={reqUrl}>{fFName}</StyledLabel>
                    <StyledTextInput
                        type="text"
                        value={inputs.firstName}
                        name="firstName"
                        placeholder="John"
                        onChange={handleChange}
                        required
                        validationText="auto-generate"
                    />
                </div>

                <div>
                    <StyledLabel required={reqUrl}>{fPosition}</StyledLabel>
                    <StyledTextInput
                        type="text"
                        value={inputs.lastName}
                        name="lastName"
                        placeholder="Doe"
                        onChange={handleChange}
                        required
                        validationText="auto-generate"
                    />
                </div>

                <div>
                    <StyledLabel required={reqUrl}>{fEmail}</StyledLabel>
                    <StyledTextInput
                        type="email"
                        value={inputs.email}
                        name="email"
                        placeholder="johndoe@email.com"
                        onChange={handleChange}
                        required
                        validationText="auto-generate"
                    />
                </div>

                <div>
                        <StyledLabel required={reqUrl}>{fCompany}</StyledLabel>
                        <StyledTextInput
                            type="text"
                            value={inputs.company}
                            name="company"
                            required
                            placeholder="John Doe Network"
                            onChange={handleChange}
                            validationText="auto-generate"
                        />
                </div>
                
                <StyledLabel required={reqUrl}>{fCompanyNums}</StyledLabel>
                <div style={{ margin: "10px 0 30px" }}>
                    {form_numbers.map(
                        ({ form_number: { text: item } }) => (
                            <CheckContainer>
                                <CheckboxRadioGroup style={{ height: 20 }}>
                                    <StyledCheckbox
                                        value={item}
                                        name="companySize"
                                        onChange={handleChange}
                                        className="pre-course-checkbox"
                                    >
                                        {item}
                                    </StyledCheckbox>
                                </CheckboxRadioGroup>
                            </CheckContainer>
                        )
                    )}
                </div>
                <StyledLabel required={reqUrl}>{why}</StyledLabel>
                <StyledTextarea
                    placeholder="Please write your messages here"
                    value={inputs.why}
                    name="why"
                    onChange={handleChange}
                    required
                    validationText="auto-generate"
                ></StyledTextarea>
                <StyledButton>{fBtnText}</StyledButton>
            </FormContainer>
        </Container>
    )
}

export default Form
