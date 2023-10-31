import React, { useState, useEffect } from "react"
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
    Radio
} from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding: 0px 40px 64px;

    @media (min-width: 800px) {
        padding: 0px 80px 160px;
    }
`

const FormContainer = styled.form`
    background-color: ${blue.lightest};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 1px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid ${blue.light};
    padding: 64px 48px;
    width: 100%;
    max-width: 900px;
`

const FormInputs1 = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-bottom: 40px;
    
    @media (min-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }
`

const StyledTextInput = styled(TextInput)`
    margin-bottom: 0px;

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

const FormInputs2 = styled.div`
    display: block;
    gap: 20px;
    margin: 10px 0 30px;

    @media (min-width: 800px){
        display: flex;
    }
`

const SelectBox = styled.button`
    background-image: url(${props => props.bgImage});
    background-color: ${gray.lightest};
    background-repeat: no-repeat;
    padding: 90px 0px 10px;
    background-position: center
        ${props => (props.title === "Web Development" ? "30px" : "20px")};
    width: 160px;
    height: 130px;
    border: 1px solid ${gray.dark};
    margin-bottom: 10px;
    /* &:focus {
        background-image: url(${props => props.bgImage}),
            url(${props => props.bgImage2});
        background-position: center
                ${props =>
                    props.title === "Web Development" ? "30px" : "20px"},
            97% 3%;
        border: 2px solid ${gray.darkest};
    } */
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

const Block = styled.div`
    display: flex;
    position: absolute;
    width: 160px;
    height: 130px;
    top: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #514f4b6b;
    color: ${gray.lightest};
    font-weight: 400;
    font-size: 20px;

`

const StyledRadio = styled(Radio)`
    & label:before {
        border-radius: 30px;
    }

    & label {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }

    @media (max-width: 800px){
        & label {
            font-size: 12px;
        }
    }
`

const Paragraph = styled.p`
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: ${gray.darker};
    padding: 10px;
    padding-bottom: 0;
    margin-bottom: -5px;
`

const ZipDiv = styled.div`
    width: 250px;
    padding: 30px 0;
`

const Form = ({ location }) => {
    console.log(location?.state?.uid , 'location')
    useEffect(() => {
        if (location?.state?.convertKitTag) {
            localStorage.setItem(
                "convertKitTag",
                location?.state?.convertKitTag
            )
        }
        if (location?.state?.uid) {
            localStorage.setItem("fromLandingPage", location?.state?.uid)
        }
    }, [location?.state?.convertKitTag, location?.state?.uid])

    const data = useStaticQuery(graphql`
        {
            prismicPreCourseCommunityForm {
                data {
                    form_why {
                        text
                    }
                    form_select_items {
                        form_select_logo {
                            alt
                            url
                        }
                        form_select_title {
                            text
                        }
                    }
                    form_select_course {
                        text
                    }
                    form_phone {
                        text
                    }
                    form_last_name {
                        text
                    }
                    form_goals_title {
                        text
                    }
                    form_goals_items {
                        form_goals_item {
                            text
                        }
                    }
                    form_first_name {
                        text
                    }
                    form_email {
                        text
                    }
                    form_checkmark {
                        url
                    }
                    form_button_text {
                        text
                    }
                    form_required {
                        url
                    }
                    form_zip_code {
                        text
                    }
                    form_military_title {
                        text
                    }
                    form_military {
                        form_military_items {
                            text
                        }
                    }
                    form_ethnicity_title {
                        text
                    }
                    form_ethnicity_sub {
                        text
                    }
                    form_ethnicity {
                        form_ethnicity_items {
                            text
                        }
                    }
                }
            }
        }
    `)

    const {
        form_why: { text: why },
        form_select_items,
        form_select_course: { text: selectCourse },
        form_phone: { text: fPhone },
        form_last_name: { text: fLName },
        form_goals_title: { text: fTitle },
        form_goals_items,
        form_first_name: { text: fFName },
        form_email: { text: fEmail },
        form_checkmark: { url: checkUrl },
        form_button_text: { text: fBtnText },
        form_required: { url: reqUrl },
        form_zip_code: { text: fZip },
        form_military_title: {text: fMilTitle },
        form_military,
        form_ethnicity_title: {text: fEthTitle },
        form_ethnicity_sub: {text: fEthSub },
        form_ethnicity
    } = data.prismicPreCourseCommunityForm.data

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        conEmail: "",
        phone: "",
        diploma: "",
        referral: "",
        west: "",
        age: "",
        hours: "",
        progress: "",
        workFor: "",
        workForNames: "",
        course: "Web Development",
        west: [],
        goals: [],
        military: "",
        ethnicity: [],
        hispanic: "",
        zip: "",
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
                `input[name=${name}]:checked`
            )
            const checkedArr = []
            for (let i = 0; i < checkedItems.length; i++) {
                checkedArr.push(checkedItems[i].value)
            }
            setInputs(prev => {
                return {
                    ...prev,
                    [name]: checkedArr,
                }
            })
        } else {
            setInputs(prev => ({
                ...prev,
                [name]: value,
            }))
        }
    }
    console.log(inputs)
    async function handleSubmit(e, type) {
        e.preventDefault()
        let { firstName, lastName, email, conEmail, phone, diploma, west, age, hispanic, hours, workForNames, workFor, progress, referral, course, goals, why,  military, ethnicity, zip } = inputs
        // Get the UTM parameters if they exist to add to the POST URL below
        const formData = {
            firstName,
            lastName,
            email,
            conEmail,
            phone,
            diploma,
            referral,
            west,
            age,
            hours,
            progress,
            workFor,
            workForNames,
            hispanic,
            course,
            goals,
            why,
            military,
            ethnicity,
            zip,
            convertKitTag: localStorage.getItem("convertKitTag"),
            fromLandingPage: localStorage.getItem("fromLandingPage"),
        }

        const options = {
            method: "POST",
            body: JSON.stringify(formData),
        }

        const query = localStorage.getItem("query") || ""
        try {
            if(location.state.uid !== 'intro-to-tech-project'){
                await fetch(
                    `${process.env.GATSBY_PRE_COURSE_COMMUNITIES_ZAPIER_WEBHOOK_URL}${query}`,
                    options
                )
            }else {
                await fetch(
                    `${process.env.GATSBY_PRE_COURSE_COMMUNITIES_TEMP_ZAPIER_WEBHOOK_URL}${query}`,
                    options
                )
            }
            navigate("/pre-course-communities/success")
        } catch (e) {
            console.log('.error', e)
        }
    }
    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <FormInputs1>
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
                        <StyledLabel required={reqUrl}>{fLName}</StyledLabel>
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

                    <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                        <StyledLabel required={reqUrl}>Confirm Email</StyledLabel>
                        <StyledTextInput
                            type="email"
                            value={inputs.conEmail}
                            name="conEmail"
                            placeholder="johndoe@email.com"
                            onChange={handleChange}
                            required
                            validationText="auto-generate"
                        />
                    </div>

                    <div>
                        <StyledLabel required={reqUrl}>{fZip}</StyledLabel>
                        <StyledTextInput
                            type="text"
                            value={inputs.zip}
                            name="zip"
                            placeholder="Zip Code"
                            onChange={handleChange}
                            validationText="auto-generate"
                            maxLength={10}
                            required
                        />
                    </div>

                    <div>
                        <StyledLabel required={reqUrl}>{fPhone}</StyledLabel>
                        <StyledTextInput
                            type="phone"
                            value={inputs.phone}
                            name="phone"
                            placeholder="801-555-1234"
                            onChange={handleChange}
                            validationText="auto-generate"
                            required
                        />
                    </div>
                </FormInputs1>

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>A high school diploma is all that you need to qualify for the program. Do you have a high school diploma or equivalent?</StyledLabel>
                    <Paragraph>Select One</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="Yes"
                                    name="diploma"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Yes
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="No"
                                    name="diploma"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    No
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="Other"
                                    name="diploma"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Other
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>Did you attend a West Valley high School?</StyledLabel>
                    <Paragraph>Mark all that apply</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Cyprus"
                                    name="west"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Cyprus
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Granger"
                                    name="west"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Granger
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Hunter"
                                    name="west"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Hunter
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Kearns"
                                    name="west"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Kearns
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Roots Charter High School"
                                    name="west"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Roots Charter High School
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Other"
                                    name="west"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Other
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>What is your age?</StyledLabel>
                    <Paragraph>Select One</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="18-24 years old"
                                    name="age"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                18-24 years old
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="25-34 years old"
                                    name="age"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    25-34 years old
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="35-44 years old"
                                    name="age"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    35-44 years old
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="45-54 years old"
                                    name="age"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    45-54 years old
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="55+ years old"
                                    name="age"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    55+ years old
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>Are you of Hispanic, Latino, or Spanish origin?</StyledLabel>
                    <Paragraph>Select One</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="Yes"
                                    name="hispanic"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Yes
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="No"
                                    name="hispanic"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    No
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>

                <StyledLabel required={reqUrl}>{fEthTitle}</StyledLabel>
                <Paragraph>{fEthSub}</Paragraph>
                <div style={{ margin: "10px 0 30px" }}>
                    {form_ethnicity.map(
                        ({ form_ethnicity_items: { text: item } }) => (
                            <CheckContainer>
                                <CheckboxRadioGroup style={{ height: 20 }}>
                                    <StyledCheckbox
                                        value={item}
                                        name="ethnicity"
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

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>The program will require 10 to 15 hours of weekly course work and class time.  Can you confirm that you have the ability to take on this added time committment? </StyledLabel>
                    <Paragraph>Select One</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="Yes"
                                    name="hours"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Yes
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="No"
                                    name="hours"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    No
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>How did you learn about this course?</StyledLabel>
                    <Paragraph>Mark all that apply</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Online ad - Google, Facebook, Instagram, etc"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Online ad - Google, Facebook, Instagram, etc
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="LinkedIn"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    LinkedIn
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Family/Friend"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Family/Friend
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Local Utah based business chamber (Chamber West, Hispanic Chamber, LGBTQ+ Chamber, Black Chamber, Asian Chamber, etc)"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Local Utah based business chamber (Chamber West, Hispanic Chamber, LGBTQ+ Chamber, Black Chamber, Asian Chamber, etc)
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="PIK2AR"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    PIK2AR
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Latinos in Action"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Latinos in Action
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="ALPFA (Association of Latino Professionals for America)"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    ALPFA (Association of Latino Professionals for America)
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledCheckbox
                                    value="Other"
                                    name="referral"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Other
                                </StyledCheckbox>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>
                
                <StyledLabel required={reqUrl}>{fMilTitle}</StyledLabel>
                <div style={{ margin: "10px 0 30px" }}>
                    {form_military.map(
                        ({ form_military_items: { text: item } }) => (
                            <CheckContainer>
                                <CheckboxRadioGroup style={{ height: 20 }}>
                                    <StyledRadio
                                        value={item}
                                        name="military"
                                        onChange={handleChange}
                                        className="pre-course-checkbox"
                                    >
                                        {item}
                                    </StyledRadio>
                                </CheckboxRadioGroup>
                            </CheckContainer>
                        )
                    )}
                </div>

               {/* {location?.state?.uid !== 'intro-to-tech-project' && <><StyledLabel required={reqUrl}>{selectCourse}</StyledLabel>
                <FormInputs2>
                    {form_select_items.map(
                        ({
                            form_select_logo: { alt: logoAlt, url: logoUrl },
                            form_select_title: { text: selectTitle },
                        }) => {
                            const styles = {
                                backgroundImage: `url(${logoUrl}), url(${checkUrl})`,
                                backgroundPosition: `center ${
                                    selectTitle === "Web Development"
                                        ? "30px"
                                        : "20px"
                                }, 97% 3%`,
                                border: `2px solid ${gray.darkest}`,
                            }
                            return (
                                <div
                                    style={{ position: "relative" }}
                                    key={selectTitle}
                                >
                                    <SelectBox
                                        type="button"
                                        style={
                                            inputs.course === selectTitle
                                                ? styles
                                                : {}
                                        }
                                        bgImage={logoUrl}
                                        bgImage2={checkUrl}
                                        title={selectTitle}
                                        onClick={e =>
                                            handleChange(e, selectTitle)
                                        }
                                        disabled={
                                            selectTitle === "UX/UI Design"
                                        }
                                    >
                                        {selectTitle}
                                    </SelectBox>
                                    <Block
                                        style={{
                                            display:
                                                selectTitle ===
                                                    "Web Development" && "none",
                                        }}
                                    >
                                        COMING SOON
                                    </Block>
                                </div>
                            )
                        }
                    )}
                </FormInputs2></>} */}

                <StyledLabel>{fTitle}</StyledLabel>
                <div style={{ margin: "10px 0 30px" }}>
                    {form_goals_items.map(
                        ({ form_goals_item: { text: item } }) => (
                            <CheckContainer>
                                <CheckboxRadioGroup style={{ height: 20 }}>
                                    <StyledCheckbox
                                        value={item}
                                        name="goals"
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

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>I provide V School with the permission to share my progress and course completion with PROG Foundation.</StyledLabel>
                    <Paragraph>Select One</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="Yes"
                                    name="progress"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Yes
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="No"
                                    name="progress"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    No
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                    <StyledLabel required={reqUrl}>Do you or does a family member work for Progressive Leasing or subsidiary company?</StyledLabel>
                    <Paragraph>Select One</Paragraph>
                    <div style={{ margin: "10px 0 30px" }}>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="Yes"
                                    name="workFor"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    Yes
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                        <CheckContainer>
                            <CheckboxRadioGroup style={{ height: 20 }}>
                                <StyledRadio
                                    value="No"
                                    name="workFor"
                                    onChange={handleChange}
                                    className="pre-course-checkbox"
                                >
                                    No
                                </StyledRadio>
                            </CheckboxRadioGroup>
                        </CheckContainer>
                    </div>
                </div>

                <div style={{display: location?.state?.uid === 'prog-foundation' ? 'block' : 'none' }}>
                        <StyledLabel >If you answered yes to the field above, please share the name of the individual(s) who work for Progressive Leasing and their title(s)</StyledLabel>
                        <StyledTextInput
                            type="text"
                            value={inputs.workForNames}
                            name="workForNames"
                            placeholder="John Doe"
                            onChange={handleChange}
                            validationText="auto-generate"
                        />
                </div>

                <StyledLabel>{why}</StyledLabel>
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
