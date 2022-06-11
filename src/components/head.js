import * as React from "react"
import { Helmet } from "react-helmet"

export default function Head({ title, description, image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <meta charSet="utf-8" />
      <title>Voicetrainer</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content="Voicetrainer" />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}
