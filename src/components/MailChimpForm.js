import React, { useState, useEffect } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Box, Button } from "./ui"
import * as styles from "./mailChimpForm.module.css"

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    console.log("fiowejf")
    e.preventDefault()
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      })
    console.log("somehthing")
  }

  useEffect(() => {
    if (status === "success") clearFields()
  }, [status])

  const clearFields = (e) => {
    setEmail("")
  }

  return (
    <form className="" onSubmit={(e) => handleSubmit(e)}>
      <h3 className={styles.signUpText}>
        {status === "success" ? "Success!" : "Get notified when we launch! 🚀"}
      </h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(200px, 330px) 107px",
            }}
          >
            <input
              className={styles.input}
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              style={{
                borderRadius: "10px",
                border: "1px solid #2661d7",
                color: "#2661d7",
                fontSize: "16px",
                padding: "10px",
                marginRight: "8px",
              }}
            />
            {/*Close button appears if form was successfully sent*/}
            {status === "success" ? (
              <p>Success</p>
            ) : (
              <Button
                label="subscribe"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                style={{ width: "108px" }}
                formvalues={[email]}
              >
                Notify Me
              </Button>
            )}
          </Box>
        </>
      ) : null}
    </form>
  )
}

// for="MERGE0"

const MailchimpForm = (props) => {
  const url = `https://voicetrainer.us13.list-manage.com/subscribe/post?u=779d1844c1cacc14f06942b65&id=82fe76c785`

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default MailchimpForm
