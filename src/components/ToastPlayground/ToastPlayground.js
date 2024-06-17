import React from "react"
import Toast from "../Toast"
import Button from "../Button"

import styles from "./ToastPlayground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  )
  const [showToast, setShowToast] = React.useState(false)

  const onTextAreaChange = (event) => {
    setMessage(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setShowToast(true)
  }

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast variant={selectedVariant} onClose={() => setShowToast(false)}>
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={onTextAreaChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label htmlFor={variant} key={variant}>
                <input
                  id={variant}
                  type="radio"
                  name="variants"
                  value={variant}
                  checked={selectedVariant === variant}
                  onChange={(event) => {
                    setSelectedVariant(event.target.value)
                  }}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ToastPlayground
