import React, { useState } from "react"
import styled from "styled-components"
import { Formik, Field } from "formik"
import {
    blue,
    gray,
    Button,
    TextInput,
    CheckboxRadioGroup,
    Checkbox,
    Radio,
} from "@vschool/lotus"

import { initialValues } from "./initialValues"

const Form = styled.form`
    background-color: ${blue.lightest};
    border: 2px solid ${blue.base};
    width: 100%;
    max-width: 674px;
    padding: 56px 24px 88px;

    @media (min-width: 800px) {
        padding: 64px 88px 88px;
    }
`

export default function BackgroundForm() {
    const [formData, setFormData] = useState(initialValues)
    function handleChange(e) {
        const { name, value, type } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]:
                type === "checkbox"
                    ? prevData[name].includes(value)
                        ? prevData[name].filter(val => val !== value)
                        : [...prevData[name], value]
                    : value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                {/* <CheckboxRadioGroup label="Which scholarship(s) are you applying for?">
                    <Checkbox
                        name="scholarshipChoices"
                        onChange={handleChange}
                        checked={formData.scholarshipChoices.includes(
                            "You Belong in Tech"
                        )}
                        value={"You Belong in Tech"}
                    >
                        You Belong in Tech - ($21,000) <i>Full</i>
                    </Checkbox>
                    <Checkbox
                        name="scholarshipChoices"
                        onChange={handleChange}
                        checked={formData.scholarshipChoices.includes(
                            "MyBaseGuide Scholarship"
                        )}
                        value={"MyBaseGuide Scholarship"}
                    >
                        MyBaseGuide Scholarship - ($21,000) <i>Full</i>
                    </Checkbox>
                    <Checkbox
                        name="scholarshipChoices"
                        onChange={handleChange}
                        checked={formData.scholarshipChoices.includes(
                            "Community Relief"
                        )}
                        value={"Community Relief"}
                    >
                        Community Relief - ($6,000) <i>Partial</i>
                    </Checkbox>
                    <Checkbox
                        name="scholarshipChoices"
                        onChange={handleChange}
                        checked={formData.scholarshipChoices.includes(
                            "Digital Family Fund"
                        )}
                        value={"Digital Family Fund"}
                    >
                        Digital Family Fund - ($6,000) <i>Partial</i>
                    </Checkbox>
                </CheckboxRadioGroup>
                <br />
                <TextInput
                    label="What is your birthdate?"
                    placeholder="mm/dd/yyyy"
                />
                <br />
                <CheckboxRadioGroup label="What is your gender?">
                    <Radio>Male</Radio>
                    <Radio>Female</Radio>
                    <Radio>Non-Binary</Radio>
                    <Radio>Prefer not to say</Radio>
                </CheckboxRadioGroup>
                <br />
                <CheckboxRadioGroup label="Do you consider yourself a member of the Lesbian, Gay, Bisexual and/or Transgender (LGBTQIA+) Community?">
                    <Radio>Yes</Radio>
                    <Radio>No</Radio>
                    <Radio>No, but I consider myself an ally</Radio>
                    <Radio>Prefer not to say</Radio>
                </CheckboxRadioGroup>
                <br />
                <CheckboxRadioGroup label="What is your ethnicity?">
                    <Checkbox>American Indian or Alaska Native</Checkbox>
                    <Checkbox>Asian</Checkbox>
                    <Checkbox>Black or African American</Checkbox>
                    <Checkbox>
                        Hispanic or Latino or Spanigh Origin of any race
                    </Checkbox>
                    <Checkbox>
                        Native Hawaiian or Other Pacific Islander
                    </Checkbox>
                    <Checkbox>White</Checkbox>
                </CheckboxRadioGroup>
                <br />
                <CheckboxRadioGroup label="Are you an active duty member, or veteran of the United States Military?">
                    <Radio>US Air Force</Radio>
                    <Radio>US Army</Radio>
                    <Radio>US Marine Corps</Radio>
                    <Radio>US Navy</Radio>
                    <Radio>US Coast Guard</Radio>
                    <Radio>US Military Dependent</Radio>
                    <Radio>Not a member of dependent of the US Military</Radio>
                </CheckboxRadioGroup>
                <br />
                <CheckboxRadioGroup label="How will you primarily attend V School?">
                    <Radio>Remote, Full Time</Radio>
                    <Radio>Remote, Part Time</Radio>
                </CheckboxRadioGroup>
                <br />
                <CheckboxRadioGroup label="How do you plan to pay for V School?">
                    <Checkbox>Upfront payment (Bitcoin, Cash)</Checkbox>
                    <Checkbox>Payment Plan</Checkbox>
                    <Checkbox>
                        GI Bill, Vocational Rehab, Workforce Services
                    </Checkbox>
                    <Checkbox>Loans, Financing</Checkbox>
                    <Checkbox>Income Share Agreement</Checkbox>
                    <Checkbox>Full Tuition Scholarship</Checkbox>
                    <Checkbox>Partial Tuition Scholalrship</Checkbox>
                    <Checkbox>I am not sure yet</Checkbox>
                </CheckboxRadioGroup>
                <br />
                <TextInput
                    type="textarea"
                    label="Please describe your financial situation and how a scholarship, if received, would help you reach your career goals."
                    placeholder="Type Response"
                />
                <br />
                <TextInput
                    type="textarea"
                    label="Who relies on support from you currently? How will they be impacted during your studies, and once you are employed in a new career?"
                    placeholder="Type Response"
                />
                <br />
                <TextInput
                    type="textarea"
                    label="How will you support yourself (and dependents) financially throughout this career transition?"
                    placeholder="Type Response"
                />
                <br />
                <CheckboxRadioGroup label="What financing options have you explored to help you make this career transition?">
                    <Checkbox>Family Financial Support</Checkbox>
                    <Checkbox>Skills Fund</Checkbox>
                    <Checkbox>Climb Credit</Checkbox>
                    <Checkbox>Personal Savings</Checkbox>
                    <Checkbox>Education Savings/Investment Account</Checkbox>
                    <Checkbox>Personal Loan</Checkbox>
                    <Checkbox>Government Assistance Programs</Checkbox>
                    <Checkbox>Religious/Community Support</Checkbox>
                </CheckboxRadioGroup>
                <br /> */}
                <Button>Submit</Button>
            </Form>
        </section>
    )
}
