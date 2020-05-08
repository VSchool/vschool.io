import { gray, yellow, purple, green, blue, orange, pink } from "@vschool/lotus"

export const getColorFromTag = tag => {
    switch (tag) {
        case "design":
            return yellow.light
        case "student story":
            return orange.light
        case "engineering":
            return purple.light
        case "news":
            return blue.light
        case "product":
            return green.light
        case "events":
            return pink.light
        default:
            return gray.light
    }
}
