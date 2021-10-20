import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ThankYou = () => {
  const data = useStaticQuery(graphql`
    {
      prismicCompletionForm {
        data {
          thank_description {
            text
          }
          thank_image {
            alt
            url
          }
          thank_title {
            text
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ThankYou
