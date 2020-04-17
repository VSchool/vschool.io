import React from "react"

// A replacement for regular anchor elements that automatically implements
// the querystring from sessionStorage
// This makes it so we can track the UTM parameters on sites outside of our own
// like on links to Calendly.
export default function({ to, children, ...rest }) {
    const query = sessionStorage.getItem("query")
    return (
        <a {...rest} href={`${to}${query}`}>
            {children}
        </a>
    )
}
