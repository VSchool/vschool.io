import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Step3 = () => {
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
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Step3
