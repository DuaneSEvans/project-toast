import React from "react"
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather"
import VisuallyHidden from "../VisuallyHidden"
import styles from "./Toast.module.css"
import { ToastContext } from "../ToastProvider/ToastProvider"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ id, variant, children }) {
  const { removeToast } = React.useContext(ToastContext)
  const Icon = ICONS_BY_VARIANT[variant]

  const dismiss = () => {
    removeToast(id)
  }
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
        <VisuallyHidden>{variant}</VisuallyHidden>
      </p>
      <button
        className={styles.closeButton}
        onClick={dismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
