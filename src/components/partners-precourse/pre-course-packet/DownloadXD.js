import React, { useState } from 'react'
import HeroLayout from '../../shared/HeroLayout';
import styled from 'styled-components'
import { TextInput, Button } from '@vschool/lotus'
import { useStaticQuery, graphql } from "gatsby"
import {  gray } from '@vschool/lotus'

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 65px;
    padding-bottom: 157px;

    & > div {
        flex-direction: column-reverse;

        @media (min-width: 800px){
            flex-direction: row;
        }
    }

    @media (min-width: 1024px) {
        padding-top: 100px;
        padding-bottom: 357px;
    }
`

const Title = styled.h1`
    font-weight: 900;
    color: ${gray.darkest};
    margin-bottom: 32px;
    font-size: 44px;
    line-height: 48px;

    @media (min-width: 1024px) {
        font-size: 56px;
        line-height: 56px;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    // height: auto;
    // border: 2px dashed blue;

    & > .wrapper {
        display: block;

        // border: 1px solid black;

        & > .first-name {
            margin: 0px;
            margin-right: 12px;
        }
    
        & > .last-name {
            margin-left: 0px;
        }

        @media (min-width: 800px){
            display: flex;
            
            & > .last-name {
                margin-left: 12px;
            }
        }
    }

    & > .button-wrapper {
        margin-top: 8px;
        

        & > .form-button {

            &:hover {
                box-shadow: none;
            }
    
            &:active {
                border: 2px solid ${gray.dark};
            }
        }
    }
`

const StyledInput = styled(TextInput)`

    margin: 0px;
`

const StyledPhoneInput = styled(TextInput)`
    margin-bottom: 10px;
`

const StyledButton = styled(Button)`
    @media (max-width: 800px){
        margin: 40px auto 80px;
        width: 100%;
    }
`

const Image = styled.img`
    margin-bottom: 40px;

    @media(min-width: 800px){
        margin-bottom: 0;
    }
`

export default function Index(props) {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')

    const data = useStaticQuery(graphql`
    {
      prismicPrecoursePartners {
        data {
          download_button {
            text
          }
          download_company {
            text
          }
          download_email {
            text
          }
          download_first_name {
            text
          }
          download_image {
            alt
            url
          }
          download_last_name {
            text
          }
          download_phone {
            text
          }
          download_required {
            alt
            url
          }
          download_title {
            text
          }
        }
      }
    }
  `)
    
    const {
        download_button: { text: btn },
        download_company: { text: dCompany },
        download_email: { text: dEmail },
        download_first_name: { text: firstName },
        download_image: { url, alt },
        download_last_name: { text: lastName },
        download_phone: { text: dPhone },
        download_title: { text: title },
    } = data.prismicPrecoursePartners.data

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = {
            name: fName + ' ' + lName,
            email,
            phone,
            company,
            convertKitTag: props.convertKitTag
        }

        const options = {
            method: "POST",
            body: JSON.stringify(formData)
        }

        await fetch(process.env.GATSBY_CONVERTKIT_SIGNUP_ZAPIER_WEBHOOK_URL, options)

        var link = document.createElement("a");
        link.href = props.convertKitTag === "intro to tech info packet" ? "https://drive.google.com/file/d/1lF1qMnhwLn1gaqefjSqS2AWxV_qXjHRQ/view?usp=sharing" : "https://drive.google.com/file/d/1TkmbmHhJXIyvH8rRr2UeIe7KhD14d1nz/view"
        link.target = "_blank";
        link.download = "Intro to Tech Partner Packet";
    
        document.body.appendChild(link);
    
        link.click();
        setTimeout(function () {
        window.URL.revokeObjectURL(link);
        }, 200);
         

    }

    return (
        <Container>
            <HeroLayout
                text={
                    <>
                        <Title>{title}</Title>
                        <StyledForm className='hero-form' onSubmit={handleSubmit}>
                            <div className={'wrapper'} >
                                <StyledInput
                                    type="text"
                                    label={firstName}
                                    name="fName"
                                    placeholder="John"
                                    value={fName}
                                    onChange={e => setFName(e.target.value)}
                                    required={true}
                                    validationText="Required"
                                    className={'first-name'}
                                />
                                <StyledInput
                                    type="text"
                                    label="Last Name"
                                    name={lastName}
                                    placeholder="Doe"
                                    value={lName}
                                    onChange={e => setLName(e.target.value)}
                                    required
                                    validationText="Required"
                                    className={'last-name'}
                                />
                            </div>
                                <StyledInput
                                    type="text"
                                    label={dEmail}
                                    name="email"
                                    placeholder="john@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required={true}
                                    validationText="Required"
                                    className={'email'}
                                />

                                <StyledInput
                                    type="text"
                                    label={dCompany}
                                    name="company"
                                    placeholder="john@email.com"
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}
                                    required={true}
                                    validationText="Required"
                                    className={'company'}
                                />

                                <StyledPhoneInput
                                    type="text"
                                    label={dPhone}
                                    name="phone"
                                    placeholder="555-555-5555"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    required={false}
                                    validationText="Required"
                                    className={'phone'}
                                />
                            <div className='button-wrapper'>
                                <StyledButton buttonStyle={'primary-dark'} size={'xl'}>{btn}</StyledButton>
                            </div>
                        </StyledForm>
                
                    </>
                }
                image={
                    <>
                        <Image src={url} alt={alt} />
                    </>
                }>       
            </HeroLayout>
        </Container>
    )
}









    


