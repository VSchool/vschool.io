import React, { useState } from "react"

export const BlogFilterContext = React.createContext()

export default function BlogFilterProvider(props) {
    const [blogFilter, setBlogFilter] = useState("Blog Home")
    return (
        <BlogFilterContext.Provider value={{ blogFilter, setBlogFilter }}>
            {props.children}
        </BlogFilterContext.Provider>
    )
}
