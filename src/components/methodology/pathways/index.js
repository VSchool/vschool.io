import React, { useState, useRef, useEffect, useCallback } from "react"
import styled from "styled-components"
import { green, yellow, purple, blue } from "@vschool/lotus"
import Information from "./Information.js"
import GraphContainer from "./GraphContainer.js"
import ProgressBar from "./ProgressBar.js"

const mockGraphData = [
    {
        completedBars: [],
        currentBar: {
            title: "V School",
            endText: "Job Offer",
            color: green.base,
            barStart: 4,
            barEnd: 100,
            barNum: 0,
        },
        additionalBars: [
            {
                title: "Bootcamps",
                color: yellow.base,
                barStart: 4,
                barNum: 1,
            },
            {
                title: "Traditional Education",
                color: purple.base,
                barStart: 4,
                barNum: 2,
            },
            {
                title: "Self Taught",
                color: blue.base,
                barStart: 4,
                barNum: 3,
            },
        ],
    },
    {
        completedBars: [
            {
                title: "V School",
                endText: "Job Offer",
                color: green.base,
                barEnd: 100,
                barNum: 0,
            },
        ],
        currentBar: {
            title: "Bootcamps",
            endText: "A Certificate",
            color: yellow.base,
            barStart: 4,
            barEnd: 70,
            barNum: 1,
        },
        additionalBars: [
            {
                title: "Traditional Education",
                color: purple.base,
                barStart: 4,
                barNum: 2,
            },
            {
                title: "Self Taught",
                color: blue.base,
                barStart: 4,
                barNum: 3,
            },
        ],
    },
    {
        completedBars: [
            {
                title: "V School",
                endText: "Job Offer",
                color: green.base,
                barEnd: 100,
                barNum: 0,
            },
            {
                title: "Bootcamps",
                endText: "A Certificate",
                color: yellow.base,
                barEnd: 70,
                barNum: 1,
            },
        ],
        currentBar: {
            title: "Traditional Education",
            endText: "A Degree",
            color: purple.base,
            barStart: 4,
            barEnd: 45,
            barNum: 2,
        },
        additionalBars: [
            {
                title: "Self Taught",
                color: blue.base,
                barStart: 4,
                barNum: 3,
            },
        ],
    },
    {
        completedBars: [
            {
                title: "V School",
                endText: "Job Offer",
                color: green.base,
                barEnd: 100,
                barNum: 0,
            },
            {
                title: "Bootcamps",
                endText: "A Certificate",
                color: yellow.base,
                barEnd: 70,
                barNum: 1,
            },
            {
                title: "Traditional Education",
                endText: "A Degree",
                color: purple.base,
                barEnd: 45,
                barNum: 2,
            },
        ],
        currentBar: {
            title: "Self Taught",
            endText: "1M Google Searches",
            color: blue.base,
            barStart: 4,
            barEnd: 30,
            barNum: 3,
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

const FixedContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    position: relative;

    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`

export default function Pathways(props) {
    const [selectedInfo, setSelectedInfo] = useState(0)
    const [startAnimation, setStartAnimation] = useState(false)
    const containerRef = useRef()

    const handleScroll = useCallback(() => {
        if (
            containerRef.current.offsetTop - 500 < window.scrollY &&
            !startAnimation
        ) {
            setStartAnimation(true)
        }
    }, [startAnimation])

    useEffect(() => {
        window.addEventListener("wheel", handleScroll)
        window.addEventListener("touchmove", handleScroll)

        return () => {
            window.removeEventListener("wheel", handleScroll)
            window.removeEventListener("touchmove", handleScroll)
        }
    }, [handleScroll])

    return (
        <PathwaysContainer>
            <FixedContainer ref={containerRef}>
                <GraphContainer
                    info={mockGraphData[selectedInfo]}
                    changeView={setSelectedInfo}
                    selectedBar={selectedInfo}
                    startAnimation={startAnimation}
                />
                <Information
                    info={mockInfoData[selectedInfo]}
                    startAnimation={startAnimation}
                    selectedInfo={selectedInfo}
                    setSelectedInfo={setSelectedInfo}
                />
            </FixedContainer>
            <ProgressBar
                selectedInfo={selectedInfo}
                setSelectedInfo={setSelectedInfo}
            />
        </PathwaysContainer>
    )
}
