import React, { useState, useEffect, useContext } from "react"
import { Context } from "../FormContext"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
    gray,
    blue,
    TextInput,
    Textarea,
    Checkbox,
    Button,
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
    padding: 30px;
    width: 100%;
    max-width: 900px;

    @media (min-width: 800px){
      padding: 64px;
    }
`

const StyledLabel = styled.label`
    padding: 0 10px 0 0;
    font-family: "aktiv-grotesk-extended";
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
    margin-left: ${props => props.required ? '10px' : 0};


    @media (min-width: 800px){
        font-size: 12px;
        line-height: 16px;
    }
`

const StyledTextarea = styled(Textarea)`
    margin: 10px 0 0px;
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

const InputDescription = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: ${gray.darker};
    
    @media (min-width: 800px){
    }
`

const RadioContainer = styled.div`
  margin: 20px 0;

  & > .radio {
    margin: 0.5rem;

    input[type=radio] {
      position: absolute;
      opacity: 0;
    }
    input[type=radio] + .radio-label:before {
      content: "";
      background: #f4f4f4;
      border-radius: 100%;
      border: 1px solid #b4b4b4;
      display: inline-block;
      width: 1.4em;
      height: 1.4em;
      position: relative;
      top: -0.2em;
      margin-right: 1em;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
    input[type=radio]:checked + .radio-label:before {
      background-color: #3197EE;
      box-shadow: inset 0 0 0 4px #f4f4f4;
    }
    input[type=radio]:focus + .radio-label:before {
      outline: none;
      border-color: #3197EE;
    }
    input[type=radio]:disabled + .radio-label:before {
      box-shadow: inset 0 0 0 4px #f4f4f4;
      border-color: #b4b4b4;
      background: #b4b4b4;
    }
    input[type=radio] + .radio-label:empty:before {
      margin-right: 0;
    }

  }
`



const Step4 = () => {
    const [inputs, setInputs] = useState({
        reviewLocation: [],
        allowReview: false
    })

    const handleChange = e => {
        let {name, value, type, checked} = e.target;

        if(type === 'checkbox'){
            setInputs(prev => {
                return checked ? 
                 { ...prev, reviewLocation: [...prev.reviewLocation, value]}
                :
                 { ...prev, reviewLocation: prev.reviewLocation.filter(location => location === value)}
            })
        }else {
            setInputs(prev => ({...prev, [name]: value == 'true' ? true : false}))
        }
    }

    console.log(inputs)
    return (
        <Container>
            <FormContainer >
                <StyledLabel>Where would you like us to post your review? Select all that apply. </StyledLabel>
                <Checkbox name="reviewLocation" value="Course Report" onChange={handleChange}>Course Report</Checkbox>
                <Checkbox name="reviewLocation" value="Career Karma" onChange={handleChange}>Career Karma</Checkbox>
                <Checkbox name="reviewLocation" value="Switchup" onChange={handleChange}>Switchup</Checkbox>
                <Checkbox name="reviewLocation" value="Google Reviews" onChange={handleChange}>Google Reviews</Checkbox>
                <Checkbox name="reviewLocation" value="Facebook Reviews" onChange={handleChange}>Facebook Reviews</Checkbox>

                <RadioContainer>
                    <StyledLabel>Do you agree to let V School post reviews on your behalf?</StyledLabel>
                    <div className="radio">
                        <input id={`radio-0`} name="allowReview" type="radio" value={true} onChange={handleChange}/>
                        <label for={`radio-0`} class="radio-label">Yes, I agree</label>
                    </div>
                    <div className="radio">
                        <input id={`radio-1`} name="allowReview" type="radio" value={false} onChange={handleChange}/>
                        <label for={`radio-1`} class="radio-label">No, I do not agree</label>
                    </div>
                </RadioContainer>

            </FormContainer>
        </Container>
    );
};

export default Step4;