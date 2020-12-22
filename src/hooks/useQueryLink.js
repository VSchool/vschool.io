import { useState, useEffect } from "react"
import { navigate } from "gatsby"

/**
Custom hook to add query strings to the end of the given URL

Returns a function (similar to navigate) that can be called with the `to` parameter and
will automatically add the saved query to the URL if it's for an external site
 */
export function useQueryLink() {
    const [query, setQuery] = useState("")
    useEffect(() => {
        const sessionQuery = localStorage.getItem("query") || ""
        setQuery(sessionQuery)
    }, [])
    return to => {
        const url = to.startsWith("/") ? to : `${to}${query}`
        navigate(url)
    }
}
