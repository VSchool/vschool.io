/**
The link resolver only affects pages that are linked in Prismic as internal documents
 */

const linkResolver = doc => {
    // URL for the course pages should start with /courses
    if (doc.type === "course_page") {
        return `/courses/${doc.uid}`
    }

    // All other pages
    return `/${doc.uid}`
}

module.exports = linkResolver