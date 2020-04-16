import React from "react"
import { Link } from "gatsby"
import { useQueryString } from "../../hooks/useQueryString"

// Custom component that adds the site's current query string
// to all links so they're maintained around the site
// When importing, still use `import Link from "../path/to/shared/QueryLink"`
function QueryLink({ to, children, ...rest }) {
    const query = useQueryString()
    return to.startsWith("/") ? (
        <Link {...rest} to={`${to}${query}`}>
            {children}
        </Link>
    ) : (
        <a {...rest} href={`${to}${query}`}>
            {children}
        </a>
    )
}

export default QueryLink
