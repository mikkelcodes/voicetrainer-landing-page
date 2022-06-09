import { graphql } from "gatsby"
import "./hero.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { Box, Container, Flex, Heading, Kicker, Section, Text } from "./ui"
import MailchimpForm from "./MailChimpForm"

export default function Hero(props) {
  return (
    <Section
      style={{
        marginTop: "-95px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Flex gap={4} variant="responsive" className="flex-container">
          <Box
            width="half"
            justifyContent="center"
            display="flex"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                maxWidth: "450px",
                padding: "20px",
                borderRadius: "15px",
              }}
              className="card-shadow image-container"
            >
              {props.image && (
                <GatsbyImage
                  alt={props.image.alt}
                  image={getImage(props.image.gatsbyImageData)}
                  style={{ maxHeight: "500px", maxWidth: "400px" }}
                />
              )}
            </Box>
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              Shaping the future of voice training, with technology
            </Heading>
            <Text style={{ marginBottom: "50px", fontSize: "20px" }} as="p">
              We are making a platform tailored to{" "}
              <strong>better collaboration </strong>
              between voice teachers and students 🧑‍🏫🤝👩‍🎓
            </Text>
            <MailchimpForm />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
