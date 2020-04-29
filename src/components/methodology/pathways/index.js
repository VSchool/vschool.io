import React, { useState } from "react"
import styled from "styled-components"
import { green, yellow, purple, blue } from "@vschool/lotus"
import Information from "./Information.js"
import GraphContainer from "./GraphContainer.js"

const mockGraphData = [
    {
        completedBars: [],
        currentBar: {
            title: "V School",
            endText: "Job Offer",
            color: green.light,
            barStart: 10,
            barEnd: 100,
        },
        additionalBars: [
            {
                title: "Bootcamps",
                color: yellow.light,
                barStart: 10,
            },
            {
                title: "Traditional Education",
                color: purple.light,
                barStart: 10,
            },
            {
                title: "Self Taught",
                color: blue.light,
                barStart: 10,
            },
        ],
    },
    {
        completedBars: [
            {
                title: "V School",
                endText: "Job Offer",
                color: green.light,
                barEnd: 100,
            },
        ],
        currentBar: {
            title: "Bootcamps",
            endText: "A Certificate",
            color: yellow.light,
            barStart: 10,
            barEnd: 70,
        },
        additionalBars: [
            {
                title: "Traditional Education",
                color: purple.light,
                barStart: 10,
            },
            {
                title: "Self Taught",
                color: blue.light,
                barStart: 10,
            },
        ],
    },
    {
        completedBars: [
            {
                title: "V School",
                endText: "Job Offer",
                color: green.light,
                barEnd: 100,
            },
            {
                title: "Bootcamps",
                endText: "A Certificate",
                color: yellow.light,
                barEnd: 70,
            },
        ],
        currentBar: {
            title: "Traditional Education",
            endText: "A Degree",
            color: purple.light,
            barStart: 10,
            barEnd: 45,
        },
        additionalBars: [
            {
                title: "Self Taught",
                color: blue.light,
                barStart: 10,
            },
        ],
    },
    {
        completedBars: [
            {
                title: "V School",
                endText: "Job Offer",
                color: green.light,
                barEnd: 100,
            },
            {
                title: "Bootcamps",
                endText: "A Certificate",
                color: yellow.light,
                barEnd: 70,
            },
            {
                title: "Traditional Education",
                endText: "A Degree",
                color: purple.light,
                barEnd: 45,
            },
        ],
        currentBar: {
            title: "Self Taught",
            endText: "1M Google Searches",
            color: blue.light,
            barStart: 10,
            barEnd: 30,
        },
        additionalBars: [],
    },
]

const mockInfoData = [
    {
        title: "V School",
        highlight: green.light,
        info:
            "Outcome-based program designed for you to reskill, gain industry experience, and launch a career in tech. Move forward when you master each lesson and graduate when you land a job.",
        bullets: [
            "Online Classes Tailored to Your Schedule",
            "Work on Real Life Projects",
            "Internship Networking to Gain Industry Experience",
        ],
    },
    {
        title: "Bootcamps",
        highlight: yellow.light,
        info:
            "Time-based schools can get you in and out the door in 12 weeks, but often leave you alone and unprepared to land a job after you earn a certificate.",
        bullets: [
            "Time Based Structure",
            "Graduate Without Being Job-Ready",
            "Forced to Put Life on Pause",
        ],
    },
    {
        title: "Traditional",
        highlight: purple.light,
        info:
            "Traditional education is the most expensive and longest option, and continually had a hard time keeping up with the current needs of the industry. Learning outdated content over a four year span will earn you a degree, not a job.",
        bullets: [
            "Too Slow for the Tech Industry",
            "Lacks Real-Life Skills + Experience",
            "Your Future Isn't Their Focus",
        ],
    },
    {
        title: "Self Taught",
        highlight: blue.light,
        info:
            "You are entirely responsible for finding learning resources and identifying what you need to learn and in what order. This ends up taking a lot of time that could be used learning your craft.",
        bullets: [
            "Harder to Get a Job",
            "Navigate Tech Industry on Your Own",
            "Lack of Structure and Mentorship",
        ],
    },
]

const PathwaysContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FixedContainer = styled.div``

export default function Pathways(props) {
    const [selectedInfo, setSelectedInfo] = useState(0)
    return (
        <PathwaysContainer>
            <FixedContainer>
                <GraphContainer
                    info={mockGraphData[selectedInfo]}
                    changeView={setSelectedInfo}
                />
                <Information info={mockInfoData[selectedInfo]} />
            </FixedContainer>
        </PathwaysContainer>
    )
}
