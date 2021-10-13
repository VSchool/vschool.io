import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Step2 = () => {
  const data = useStaticQuery(graphql`
    {
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
          step2_dropdowns {
            description {
              text
            }
            title {
              text
            }
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
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Step2
