import React, { createContext, useState, useEffect } from "react"
const NavbarContext = createContext()

function NavbarContextProvider({ children }) {
    const [mainMenuOpen, setMainMenuOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    const [chosenSubMenu, setChosenSubMenu] = useState(null)

    function toggleMainMenu() {
        setMainMenuOpen(state => !state)
    }

    function toggleSubMenu() {
        setSubMenuOpen(state => !state)
    }

    function closeBothMenus() {
        setMainMenuOpen(false)
        setSubMenuOpen(false)
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
            value={{
                mainMenuOpen,
                subMenuOpen,
                toggleMainMenu,
                toggleSubMenu,
                chosenSubMenu,
                setChosenSubMenu,
                // chosenSubMenuItems,
                // setChosenSubMenuItems,
                closeBothMenus,
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarContextProvider, NavbarContext }
