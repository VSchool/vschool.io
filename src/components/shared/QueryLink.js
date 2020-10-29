import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledAnchor = styled.a`
    text-decoration: none;
`

// A replacement for regular anchor elements that automatically implements
// the querystring from sessionStorage
// This makes it so we can track the UTM parameters on sites outside of our own
// like on links to Calendly.
export default function({ to, children, ...rest }) {
    // Had to put query in state and useEffect because Gatsby didn't have reference to
    // `window` or `sessionStorage` at build time. Inside useEffect, it'll only run after mount
    // See https://www.gatsbyjs.org/docs/debugging-html-builds/ for more details
    const [query, setQuery] = useState("")
    useEffect(() => {
        const sessionQuery = sessionStorage.getItem("query") || ""
        setQuery(sessionQuery)
    }, [])

    return to.startsWith("/") ? (
        <StyledLink to={to} {...rest}>
            {children}
        </StyledLink>
    ) : (
        <StyledAnchor {...rest} href={`${to}${query}`}>
            {children}
        </StyledAnchor>
    )
}
