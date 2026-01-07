// 1. Configure your variants here!
const variantConfig = {
  light: [], // Add light variants here, e.g. ["latte", "solarized-light"]
  dark: ["notebook"], // Add dark variants here, e.g. ["rose-pine", "dracula"]
}

const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
const currentTheme = localStorage.getItem("theme") ?? userPref
const currentVariant = localStorage.getItem("theme-variant") ?? null

// Set initial state on page load
document.documentElement.setAttribute("saved-theme", currentTheme)
if (currentVariant) {
  document.documentElement.setAttribute("theme-variant", currentVariant)
}

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = (e: Event) => {
    const themeAttr = document.documentElement.getAttribute("saved-theme") as "light" | "dark"
    const variantAttr = document.documentElement.getAttribute("theme-variant")
    
    // Get the variant list for the current mode (light or dark)
    const currentVariantList = variantConfig[themeAttr] || []

    if (!variantAttr) {
        // CASE A: We are in Default Mode.
        // If there are variants available for this mode, switch to the first one.
        if (currentVariantList.length > 0) {
            const nextVariant = currentVariantList[0]
            document.documentElement.setAttribute("theme-variant", nextVariant)
            localStorage.setItem("theme-variant", nextVariant)
        } else {
            // No variants? Switch to the OPPOSITE mode (Default).
            const nextTheme = themeAttr === "light" ? "dark" : "light"
            document.documentElement.setAttribute("saved-theme", nextTheme)
            localStorage.setItem("theme", nextTheme)
            emitThemeChangeEvent(nextTheme as "light" | "dark")
        }
    } else {
        // CASE B: We are already in a Variant.
        const currentIdx = currentVariantList.indexOf(variantAttr)
        
        // Are there more variants left in this specific list?
        if (currentIdx > -1 && currentIdx + 1 < currentVariantList.length) {
             // Yes, go to the next variant
             const nextVariant = currentVariantList[currentIdx + 1]
             document.documentElement.setAttribute("theme-variant", nextVariant)
             localStorage.setItem("theme-variant", nextVariant)
        } else {
             // No, we reached the end of this mode's variants.
             // Switch to the OPPOSITE mode (Default).
             const nextTheme = themeAttr === "light" ? "dark" : "light"
             document.documentElement.setAttribute("saved-theme", nextTheme)
             document.documentElement.removeAttribute("theme-variant")
             localStorage.setItem("theme", nextTheme)
             localStorage.removeItem("theme-variant")
             emitThemeChangeEvent(nextTheme as "light" | "dark")
        }
    }
  }

  // Attach the listener to the button
  const themeButton = document.querySelector(".darkmode") as HTMLButtonElement
  if (themeButton) {
    themeButton.removeEventListener("click", switchTheme)
    themeButton.addEventListener("click", switchTheme)
  }
})