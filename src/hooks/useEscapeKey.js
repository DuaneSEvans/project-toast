import React from "react"

export function useEscapeKey(fn) {
  return React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        fn()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [fn])
}
