import React, { useState, useEffect } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Box, Button, Subhead } from "./ui"

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      })
  }

  useEffect(() => {
    if (status === "success") clearFields()
  }, [status])

  const clearFields = () => {
    setEmail("")
  }

  return (
    <form className="" onSubmit={(e) => handleSubmit(e)}>
      <Subhead>
        {status === "success" ? "Success!" : "Get notified when we launch!"}
      </Subhead>

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
              type="text"
              className="input"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
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
                style={{ width: "108px" }}
                formValues={[email]}
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
  const url = `https://voicetrainer.us13.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`

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
