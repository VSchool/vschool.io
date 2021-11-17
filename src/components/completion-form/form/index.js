import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { gray, blue } from "@vschool/lotus"
import { useState, useEffect } from 'react';

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

const ProgressContainer = styled.div`
    width: 100%;
    max-width: 620px;
`

const ProgressBarContainer = styled.div`
    height: 8px;
    width: 100%;
    background-color: ${blue.light};
    margin-bottom: 80px;
    display: flex;
    justify-content: space-around;


    @media (min-width: 800px){
        margin-bottom: 96px;
    }
`

const ProgressStep = styled.div`
    position: relative;
    bottom: 7px;
`

const ProgressNum = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 30px;
    text-align: center;
    margin: auto;
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color ? props.color : blue.light};
`

const ProgressTitle = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: ${gray.darker};
    padding-top: 20px;

    @media (min-width: 800px){
        font-size: 16px;
        line-height: 24px;
    }
`

const ProgressBarCompleted = styled.div`
    height: 8px;
    width: ${props => props.step == 1 ? '16%' : props.step == 2 ? '50%' : props.step === 3 ? '83%' : '100%'};
    background-color: ${blue.base};
    position: relative;
    top: 8px;
    margin-right: auto;

    @media (min-width: 800px){
    }
`

const Form = () => {
    const [step, setStep] = useState(1)

    useEffect(()=>{
        const step = localStorage.getItem('step') || 1
        setStep(step)
    },[])


    const submit = num => {
        setStep(num)
        localStorage.setItem('step', num)
    }

    const data = useStaticQuery(graphql`
        {
            prismicPrecoursePartners { 
                data {
                    form_required {
                        alt
                    }
                }
            }
            prismicCompletionForm {
                data {
                    step1_steps {
                        title {
                            text
                        }
                    }
                    step1_description {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_required: {reqUrl}
    } = data.prismicPrecoursePartners.data

    const {
        step1_steps,
        step1_description: {text: desc }
    } = data.prismicCompletionForm.data

    const mappedSteps = step1_steps.map(({title: { stepTitle }},i) => <ProgressStep>
                                                    <ProgressNum color={i + 1 <= step ? blue.base : blue.light}>{i + 1}</ProgressNum>
                                                    <ProgressTitle>{stepTitle}</ProgressTitle>
                                                </ProgressStep>)
    return (
        <Container>
            <BlueSubtext>{step == 4 ? 
                    'Form Submission Complete'
                    : step == 5 ?
                        'Leave a Review of V School'
                    : 'V School Completion Form'
                }</BlueSubtext>
            <Title>{step == 1 ? 
                    'Step 1: Program Evaluation'
                : step == 2 ?
                    'Step 2: Employment Details'
                : step == 3 ?
                    'Step 3: Experience Review' 
                : step == 4 ?
                    'Thank You!'
                : 'We Appreciate Your Feedback!'
                }</Title>
            <Paragraph>{
                step == 1 ? 
                    desc
                : step == 2 ?
                    'Next, we have a few questions about your current employement.'
                : step == 3 ?
                    'Now, we have a few personal questions about your experience.' 
                : step == 4 ?    
                    'We appreciate you taking time out of your day to complete this form. This information helps us to improve the V School experience. We’ll get your hoodie in the mail as soon as possible.'
                : 'Please take a few minutes to leave reviews for us and we will send you a '
                }{
                    step == 5 && <span style={{fontWeight: 600}}>$50 Amazon Gift Card! *</span>
                }</Paragraph>
            {
                step < 5 && <ProgressContainer>
                <ProgressBarCompleted step={step} />
                <ProgressBarContainer>
                    {mappedSteps}
                </ProgressBarContainer>
            </ProgressContainer>
            }
            {step == 1 ?
                <Step1 submit={submit} />
            : step == 2 ?
                <Step2 submit={submit} />
            : step == 3 ?
                <Step3 submit={submit} />
            : step == 4 ?
                <Step4 submit={submit} />
            : step == 5 ?
                <Step5 submit={submit} />
            : <Step6 submit={submit} />
            }
        </Container>
    );
};

export default Form;