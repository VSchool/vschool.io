import React, { useState, useEffect, useContext } from "react"
import { Context } from "../FormContext"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Airtable from "airtable"
import { gray, blue, TextInput, Textarea, Button, green } from "@vschool/lotus"

const Container = styled.div`
    background-color: ${gray.lighter};
    padding: 0px 0px 64px;
    max-width: 620px;
    @media (min-width: 800px) {
        padding: 0px 0px 160px;
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

const StyledLabel = styled.label`
    /* background-image: url(${props => props.required}); */
    padding: 0 10px 0 0;
    /* background-repeat: no-repeat; */
    font-family: "aktiv-grotesk-extended";
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    margin-left: ${props => (props.required ? "10px" : 0)};


    @media (min-width: 800px){
        font-size: 12px;
        line-height: 16px;
    }
`

const StyledTextarea = styled(Textarea)`
    margin: 10px 0 30px;
    height: 140px;
    position: relative;

    & > label {
        position: absolute;
        left: 0px;
        top: -24px;
    }
`

const StyledTextInput = styled(TextInput)`
    margin: 6px 0 0px;
    position: relative;

    & > label {
        position: absolute;
        left: 0px;
        top: -20px;
    }
`

const StyledSelect = styled.select`
    border: 2px solid #d8d4cf;
    height: 48px;
    /* color: #9f9c96; */
    padding-left: 16px;
    font-size: 16px;
    display: block;
    width: 100%;
    margin: 5px 0;
    background: url(${`http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png`})
        no-repeat right #ddd;
    -webkit-appearance: none;
    background-position-x: 450px;
    background-color: #ffffff;
`

const StyledButton = styled(Button)`
    @media (min-width: 800px) {
        width: 268px;
        height: 56px;
        font-size: 14px;
    }
`

const InputDiv = styled.div`
    margin-bottom: 15px;
`

const NameListContainer = styled.div`
    padding: 10px 0 16px;

    @media (min-width: 800px) {
        padding: 10px 0 32px;
    }
`

const NameList = styled.p`
    width: 420px;
    height: 34px;
    background-color: ${green.lighter};
    color: ${gray.darker};
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    padding: 16px 5px;
    width: 80%;
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const InputDescription = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: ${gray.darker};
    padding-bottom: 16px;

    @media (min-width: 800px) {
        padding-bottom: 32px;
    }
`

const Step2 = ({ location, submit }) => {
    var base = new Airtable({
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
    }).base("apphohiHhj5EHUY7u")
    const [search, setSearch] = useState("")
    const [employers, setEmployers] = useState([])
    const [filteredEmployers, setFilteredEmployers] = useState([])
    const [selectedRecords, setSelectedRecords] = useState([])

    const { addStepData, allData } = useContext(Context)

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

    // Get and Store List of Student Names
    useEffect(() => {
        setSearch("")
        setEmployers([])
        base("Company/Org")
            .select({
                view: "All Companies",
            })
            .eachPage(
                function page(records, fetchNextPage) {
                    setEmployers(prev => [
                        ...prev,
                        ...records.map(record => record.get("Name")),
                    ])
                    fetchNextPage()
                },
                function done(err) {
                    if (err) {
                        console.error(err)
                        return
                    }
                }
            )
    }, [])

    const getEmployer = name => {
        base("Company/Org")
            .select({
                maxRecords: 3,
                view: "All Companies",
                filterByFormula: `{Name} = '${name}'`,
            })
            .eachPage(function page(records) {
                setSelectedRecords(records)
                setFilteredEmployers([])
                setSearch("")
            })
    }
    useEffect(() => {
        setFilteredEmployers(
            employers.filter(name =>
                name.toLowerCase().includes(search.toLowerCase())
            )
        )
    }, [search])

    const data = useStaticQuery(graphql`
        {
            allPrismicCompletionFormBodyDropdownOptions {
                edges {
                    node {
                        items {
                            option {
                                text
                            }
                        }
                        primary {
                            step2_dropdown_description {
                                text
                            }
                            step2_dropdown_title {
                                text
                            }
                        }
                    }
                }
            }
            prismicCompletionForm {
                data {
                    step2_button {
                        text
                    }
                    step2_dates {
                        description {
                            text
                        }
                        title {
                            text
                        }
                    }
                    step2_description {
                        text
                    }
                    step2_first {
                        text
                    }
                    step2_first_description {
                        text
                    }
                    step2_fourth {
                        text
                    }
                    step2_fourth_description {
                        text
                    }
                    step2_second {
                        text
                    }
                    step2_third {
                        text
                    }
                }
            }
        }
    `)

    const {
        step2_button: { text: btn },
        step2_dates,
        step2_description: { text: desc },
        step2_first: { text: first },
        step2_first_description: { text: firstDesc },
        step2_fourth: { text: fourth },
        step2_fourth_description: { text: fourthDesc },
        step2_second: { text: second },
        step2_third: { text: third },
    } = data.prismicCompletionForm.data

    const [inputs, setInputs] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
    })

    const handleChange = e => {
        let { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const step2Data = {
            selectedRecords,
            ...inputs,
        }

        addStepData(step2Data, "step2Data")
        submit(3)
    }

    const mappedDates = step2_dates.map(
        ({ title: { text }, description: { text: dateDesc } }, i) => {
            return (
                <InputDiv>
                    <StyledLabel required={true}>{text}</StyledLabel>
                    <StyledTextInput
                        placeholder="mm/dd/yy"
                        value={inputs[`question${i + 2}`]}
                        name={`question${i + 2}`}
                        onChange={handleChange}
                        required
                        type="date"
                    ></StyledTextInput>
                    {dateDesc && (
                        <InputDescription>{dateDesc}</InputDescription>
                    )}
                </InputDiv>
            )
        }
    )

    const mappedDropdowns = data.allPrismicCompletionFormBodyDropdownOptions.edges.map(
        (
            {
                node: {
                    items,
                    primary: {
                        step2_dropdown_description: { text: dropDesc },
                        step2_dropdown_title: { text: dropTitle },
                    },
                },
            },
            i
        ) => {
            return (
                <InputDiv>
                    <StyledLabel>{dropTitle}</StyledLabel>
                    <StyledSelect
                        name={`question${i + 5}`}
                        value={inputs[`question${i + 5}`]}
                        onChange={handleChange}
                    >
                        <option value="Select Option">Select Option</option>
                        {items.map(({ option: { text } }) => (
                            <option value={text}>{text}</option>
                        ))}
                    </StyledSelect>
                    {dropDesc && (
                        <InputDescription>{dropDesc}</InputDescription>
                    )}
                </InputDiv>
            )
        }
    )

    const nameList = filteredEmployers.map(name => (
        <NameList onClick={() => getEmployer(name)}>{name}</NameList>
    ))
    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <InputDiv>
                    <StyledLabel>{first}</StyledLabel>
                    <StyledTextInput
                        type="text"
                        value={search}
                        name="search"
                        placeholder="Search and Select"
                        onChange={e => setSearch(e.target.value)}
                        validationText="auto-generate"
                    />
                    <InputDescription>{firstDesc}</InputDescription>
                    <div>{search !== "" && nameList}</div>
                </InputDiv>

                <StyledLabel>Selected Records</StyledLabel>
                <NameListContainer>
                    {selectedRecords.length !== 0 &&
                        selectedRecords.map(
                            ({ fields: { ["Name"]: text } }) => (
                                <NameList>{text}</NameList>
                            )
                        )}
                </NameListContainer>

                <InputDiv>
                    <StyledLabel required={true}>{third}</StyledLabel>
                    <StyledTextInput
                        type="text"
                        name={"question1"}
                        value={inputs.question1}
                        onChange={handleChange}
                        required
                    />
                </InputDiv>

                {mappedDates}

                <InputDiv>
                    <StyledLabel required={true}>{fourth}</StyledLabel>
                    <StyledTextInput
                        type="text"
                        name={"question4"}
                        value={inputs.question4}
                        onChange={handleChange}
                        required
                    />
                    <InputDescription>{fourthDesc}</InputDescription>
                </InputDiv>

                {mappedDropdowns}

                <StyledButton>{btn}</StyledButton>
            </FormContainer>
        </Container>
    )
}

export default Step2
