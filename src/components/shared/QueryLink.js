import React from "react"
import { Link } from "gatsby"

// A replacement for regular anchor elements that automatically implements
// the querystring from sessionStorage
// This makes it so we can track the UTM parameters on sites outside of our own
// like on links to Calendly.
export default function({ to, children, ...rest }) {
    const query = sessionStorage.getItem("query") || ""
    return to.startsWith("/") ? (
        <Link to={to} {...rest}>
            {children}
        </Link>
    ) : (
        <a {...rest} href={`${to}${query}`}>
            {children}
        </a>
    )
}
