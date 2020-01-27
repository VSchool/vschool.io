import React, { createContext, useState, useEffect } from "react"
const NavbarContext = createContext()

function NavbarContextProvider({ children }) {
    const [mainMenuOpen, setMainMenuOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    function toggleMainMenu() {
        setMainMenuOpen(state => !state)
    }

    function toggleSubMenu() {
        setSubMenuOpen(state => !state)
    }

    useEffect(() => {
        if (mainMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [mainMenuOpen])

    return (
        <NavbarContext.Provider
            value={{ mainMenuOpen, subMenuOpen, toggleMainMenu, toggleSubMenu }}
        >
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarContextProvider, NavbarContext }
