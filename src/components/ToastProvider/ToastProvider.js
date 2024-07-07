import React from "react"
import { useEscapeKey } from "../../hooks/useEscapeKey"

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

  useEscapeKey(() => {
    setToasts([])
  })

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
