/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Save the query string in sessionStorage and remove it from the URL
// (This way if the URL is copy/pasted to share by someone, it won't
// pollute the query info in analytics)
exports.onClientEntry = () => {
    const href = window.location.origin + window.location.pathname
    if (window.location.href !== href) {
        const query = window.location.search || ""
        sessionStorage.setItem("query", query)
        // window.location.replace(href)
    }
}
