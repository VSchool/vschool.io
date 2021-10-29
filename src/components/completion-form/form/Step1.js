import React, { useState, useEffect, useContext } from "react"
import { Context } from "../FormContext"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { navigate } from "gatsby"
import Airtable from 'airtable'
import {
    gray,
    blue,
    TextInput,
    Textarea,
    Button,
    green,
} from "@vschool/lotus"


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

const StyledTextInput = styled(TextInput)`
    margin-bottom: 0px;
    position: relative;

    & > label {
        position: absolute;
        left: -5px;
        top: -20px;
    }
`

const StyledLabel = styled.label`
    /* background-image: url(${props => props.required}); */
    padding: 0 10px 0 0;
    /* background-repeat: no-repeat; */
    font-family: "aktiv-grotesk-extended";
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    margin-left: ${props => props.required ? '10px' : 0};


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

const StyledButton = styled(Button)`
    @media (min-width: 800px) {
        width: 268px;
        height: 56px;
        font-size: 14px;
    }
`

const NameListContainer = styled.div`
    padding: 10px 0 16px;

    @media (min-width: 800px){
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

    @media (min-width: 800px){
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
    
    @media (min-width: 800px){
        padding-bottom: 32px;
    }
`

const Form = ({ location, submit }) => {
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appRCE5sPrn56fpvC');
    const [search, setSearch] = useState('')
    const [students, setStudents] = useState([])
    const [filteredStudents, setFilteredStudents] = useState([])
    const [selectedRecords, setSelectedRecords] = useState([])

    const {addStepData, allData} = useContext(Context)
    
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
        setSearch('')
        base('Student Records').select({
            // Selecting the first 3 records in All Records:
            maxRecords: 100,
            view: "Near Jobbing Out"
        }).eachPage(function page(records, fetchNextPage) {
            setStudents(records.map(record => record.get('Student Name')))
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    },[])

    const getStudent = name => {
        base('Student Records').select({
            maxRecords: 3,
            view: "Near Jobbing Out",
            filterByFormula: `{Student Name} = '${name}'`
        }).eachPage(function page(records) {
            if (selectedRecords[0]?.fields['Student Name'].includes(name.slice(0,name.indexOf(' '))) && selectedRecords[0]?.fields['Student Name'] !== name){
                setSelectedRecords(prev => [...prev, ...records])
            }else {
                setSelectedRecords(records)
            }
            setFilteredStudents([])
            setSearch('')
        })
    }

    useEffect(() => {
        setFilteredStudents(students.filter(name => name.toLowerCase().includes(search.toLowerCase())))
    },[search])

    const data = useStaticQuery(graphql`
    {
      prismicCompletionForm {
        data {
          step1_button {
            text
          }
          step1_first {
            text
          }
          step1_first_description {
            text
          }
          step1_inputs {
            title {
              text
            }
          }
          step1_second {
            text
          }
        }
      }
    }
  `)

    const {
        step1_button: {text: btn },
        step1_first: {text: first },
        step1_first_description: {text: firstDesc },
        step1_inputs,
        step1_second: {text: second },
    } = data.prismicCompletionForm.data

    const [inputs, setInputs] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        // Get the UTM parameters if they exist to add to the POST URL below
        const step1Data = {
            selectedRecords,
            ...inputs
        }
        const formData = {
            convertKitTag: localStorage.getItem("convertKitTag"),
            fromLandingPage: localStorage.getItem("fromLandingPage"),
        }

        addStepData(formData, 'formData')
        addStepData(step1Data, 'step1Data')
        submit(2)
        // navigate("/pre-course-communities/success")

        // const options = {
        //     method: "POST",
        //     body: JSON.stringify(formData),
        // }

        // const query = localStorage.getItem("query") || ""
        // try {
        //     await fetch(
        //         `${process.env.GATSBY_PRE_COURSE_COMMUNITIES_ZAPIER_WEBHOOK_URL}${query}`,
        //         options
        //     )
        //     navigate("/pre-course-communities/success")
        // } catch (e) {
        //     console.error(e)
        // }
    }

    const mappedInputs = step1_inputs.map(({title: {text}},i) => {
    return <>
        <StyledLabel required={true}>{text}</StyledLabel>
        <StyledTextarea
            placeholder="Enter Response"
            value={inputs[`question${i+1}`]}
            name={`question${i+1}`}
            onChange={handleChange}
            required={true}
            validationText="auto-generate"
        ></StyledTextarea>
    </>
    }
    )
    const nameList = filteredStudents.map(name => <NameList onClick={() => getStudent(name)}>{name}</NameList>)
    console.log(selectedRecords)
    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <div>
                    <StyledLabel required={false}>{first}</StyledLabel>
                    <StyledTextInput
                        type="text"
                        value={search}
                        name="search"
                        placeholder="Search and Select"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <InputDescription>{firstDesc}</InputDescription>
                </div>
                <div>
                    {search !== '' && nameList}
                </div>
                <StyledLabel required={false}>{second}</StyledLabel>
                <NameListContainer>
                {selectedRecords.length !== 0 && selectedRecords.map(({fields: { ['Student Name']: text }}) => <NameList>{text}</NameList>)}
                </NameListContainer>
                {mappedInputs}
                <StyledButton>{btn}</StyledButton>
            </FormContainer>
        </Container>
    )
}

export default Form