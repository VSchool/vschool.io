import React from "react"
import { Link } from "gatsby"
import { useQueryString } from "../../hooks/useQueryString"

// Custom component that adds the site's current query string to all links so they're maintained around the site
function CustomLink(props) {
    const query = useQueryString()
    return <Link {...props} to={`${props.to}${query}`} />
}

console.log(CustomLink)

export default CustomLink
