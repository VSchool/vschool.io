import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { blue, gray, black } from "@vschool/lotus"
import Course from "./Course.js"

const LargeContainer = styled.div`
    @media (min-width: 960px) {
        background-color: ${blue.lightest};
        display: flex;
        justify-content: center;
    }
`

const SmallContainer = styled.div`
    height: 780px;
    border-top: 2px solid ${gray.dark};
    border-bottom: 2px solid ${gray.dark};
    background-color: ${gray.lighter};
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        padding: 0 32px 0 32px;
    }

    @media (min-width: 840px) {
        display: grid;
        height: 482px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 160px 300px;
    }

    @media (min-width: 960px) {
        width: 800px;
        border: 2px solid ${gray.dark};
        padding: 0;
        margin-bottom: 80px;
        z-index: 1
    }
`

const H1 = styled.h1`
    color: ${black};
    font-family: "aktiv-grotesk";
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    margin: 98px 24px 24px 24px;

    @media (min-width: 840px) {
        grid-column: 1 / -1;
        margin-top: 80px;
        margin-bottom: 8px;
        text-align: center;
    }
`

function Courses() {
  const {
    prismicBootcampPrimer: {
      data: {
        upcoming_courses_header: {
          text: header
        },
        upcoming_courses: courses
      }
    },
    allPrismicStartDate: {
      edges: startDates
    }
  } = useStaticQuery(graphql`
    {
      allPrismicStartDate {
      edges {
        node {
          data {
            course_name {
              text
            }
            start_date(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
      prismicBootcampPrimer {
        data {
          upcoming_courses_header {
            text
          }
          upcoming_courses {
            course {
              text
            }
            course_date {
              text
            }
            course_info {
              text
            }
            course_link {
              url
            }
          }
        }
      }
    }
  `)
    return (
        <LargeContainer>
            <SmallContainer>
                <H1>{ header }</H1>
                { courses.map((course, i) => (
                    <Course key={i} {...course} startDates={startDates} />
                ))}
            </SmallContainer>
        </LargeContainer>
    )
}

export default Courses