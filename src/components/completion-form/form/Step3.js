import React, { useState, useEffect, useContext } from "react"
import { Context } from "../FormContext"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Airtable from 'airtable'
import Compressor from "compressorjs"
import {
    gray,
    blue,
    TextInput,
    Textarea,
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
    /* padding-bottom: 16px; */
    
    @media (min-width: 800px){
        /* padding-bottom: 32px; */
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

const Step3 = ({ location, submit }) => {
    const {addStepData, allData} = useContext(Context)
    const [file, setFile] = useState('')
    
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
        prismicCompletionForm {
          data {
            step3_button {
              text
            }
            step3_description {
              text
            }
            step3_photo_description {
              text
            }
            step3_photo_title {
              text
            }
            step3_radio_options {
              option {
                text
              }
            }
            step3_radio_question {
              text
            }
            step3_social {
              description {
                text
              }
              title {
                text
              }
            }
            step3_textareas {
              description {
                text
              }
              title {
                text
              }
            }
          }
        }
      }
    `)

    const {
        step3_button: { text: btn },
        step3_description: { text: desc },
        step3_photo_description: { text: photoDesc },
        step3_photo_title: { text: photoTitle },
        step3_radio_options,
        step3_radio_question: { text: radioQuestion },
        step3_social,
        step3_textareas
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

    const handleChange = (e) => {
        let { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const step3Data = {
            ...inputs
        }

        addStepData(step3Data, 'step3Data')
        submit(3)
    }

    const onChange = e => {
      // const files = Array.from(e.target.files)
      // console.log()
      // const formData = new FormData()
  
      // files.forEach((file, i) => {
      //   formData.append(i, file)
      // })
      // URL.createObjectURL(e.target.files[0]).replace('blob:', '')
      const image = e.target.files[0];
      console.log(image.size)
      new Compressor(image, {
        quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
        success: (res) => {
          // compressedResult has the compressed file.
          // Use the compressed file to upload the images to your server.   
          console.log(res,'res')     
          setFile(res)
        },
      });
    }

    async function uploadPhoto (e){
      console.log(file.size)
      // var fileData = {
      //   file: {
      //     modified: file.lastModifiedDate,
      //     name: file.name,
      //     size: file.size,
      //     type: file.type
      //   }
      // }
      
      // const options = {
      //   method: "POST",
      //   body: JSON.stringify(fileData),
      // }

      // console.log(options)
      // try {
      //   await fetch(
      //       `${process.env.GATSBY_PHOTO_UPLOAD_ZAPIER_WEBHOOK_URL}`
      //   )
      //   console.log('sent webhook')
      //   // navigate("/pre-course-communities/success")
      // } catch (e) {
      //     console.error(e)
      // }
    }

    const mappedTextareas = step3_textareas.map(({title: {text}, description: {text: textDesc}},i) => {
      return <InputDiv>
          <StyledLabel required={true}>{text}</StyledLabel>
          <StyledTextarea
              placeholder="Enter Response"
              value={inputs[`question${i+1}`]}
              name={`question${i+1}`}
              onChange={handleChange}
              required={true}
          ></StyledTextarea>
          {textDesc && <InputDescription>{textDesc}</InputDescription>}
      </InputDiv>
    })

    const mappedSocials = step3_social.map(({title: {text: social}, description: {text: socialDesc}},i) => {
      return <InputDiv>
          <StyledLabel required={true}>{social}</StyledLabel>
          <StyledTextInput
              placeholder="Enter Response"
              value={inputs[`question${i+1}`]}
              name={`question${i+1}`}
              onChange={handleChange}
              required={true}
          ></StyledTextInput>
          {socialDesc && <InputDescription>{socialDesc}</InputDescription>}
      </InputDiv>
    })

    const mappedRadios = step3_radio_options.map(({option: {text}},i) => <div class="radio">
      <input id={`radio-${i+1}`} name="radio" type="radio" value={text} checked />
      <label for={`radio-${i+1}`} class="radio-label">{text}</label>
    </div>)

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                
                {mappedTextareas}

                <RadioContainer>
                  <StyledLabel>{radioQuestion}</StyledLabel>
                  {mappedRadios}
                </RadioContainer>

                {mappedSocials}
                
                <div className='button'>
                  <label htmlFor='single'>
                      BUTTONS FIRST
                  </label>
                  {/* <input type='file' id='single' onChange={onChange} />  */}
                  <input
                    accept="image/*,capture=camera"
                    capture="”camera"
                    type="file"
                    onChange={onChange}
                  />
                </div>
                <button type="button" onClick={uploadPhoto}>Send Upload</button>
                <StyledButton>{btn}</StyledButton>
            </FormContainer>
        </Container>
    )
}

export default Step3