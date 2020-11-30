/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Save the query string in localStorage and remove it from the URL
// (This way if the URL is copy/pasted to share by someone, it won't
// pollute the query info in analytics)
// onRouteUpdate also runs on the first render
export const onRouteUpdate = ({ location }) => {
    if (
        location.search !== "" &&
        location.key === "initial" &&
        // Don't save queries when coming to the scholarship background info form.
        // This isn't my favorite solution to this problem, but I can't think of a
        // better one offhand.
        !location.pathname.includes("/scholarships/application")
    ) {
        localStorage.setItem("query", location.search)
    }
}
