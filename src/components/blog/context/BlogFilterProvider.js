import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

export const BlogFilterContext = React.createContext()

export default function BlogFilterProvider(props) {
    const [blogFilter, setBlogFilter] = useState("all")

    // Just for dev work. Can delete whole effect when ready
    useEffect(() => {
        console.log("current blogFilter:", blogFilter)
    }, [blogFilter])

    return (
        <BlogFilterContext.Provider value={{ blogFilter, setBlogFilter }}>
            {props.children}
        </BlogFilterContext.Provider>
    )
}
