import { useState, useEffect, useContext } from "React"
import { BlogFilterContext } from "../context/BlogFilterProvider.js"

// Can't, for the life of me, get this to work.
// Keep getting "Invalid hook call" error.
export function useBlogFilter(allBlogs) {
    const { blogFilter } = useContext(BlogFilterContext)
    const [featuredPost, setFeaturedPost] = useState(null)
    const [filteredPosts, setFilteredPosts] = useState(allBlogs)

    useEffect(() => {
        let featured, filtered
        if (blogFilter === "all") {
            featured = allBlogs.find(post => post.featured)
            filtered = allBlogs.filter(post => post.slug !== featured.slug)
        } else {
            filtered = allBlogs.filter(blog => blog.slug === blogFilter)
            featured = filtered.shift()
        }
        setFilteredPosts(filtered)
        setFeaturedPost(featured)
    }, [blogFilter, allBlogs])

    return { featuredPost, filteredPosts }
}
