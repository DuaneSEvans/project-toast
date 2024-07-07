import React, { useEffect } from "react"

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = ({ message, variant }) => {
    const newToasts = [...toasts, { id: crypto.randomUUID(), message, variant }]
    setToasts(newToasts)
  }
  const removeToast = (removeID) => {
    const newToasts = toasts.filter(({ id }) => id !== removeID)
    setToasts(newToasts)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape" && toasts.length > 0) {
        const newToasts = toasts.slice(1)
        setToasts(newToasts)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toasts])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
