import { graphql } from "gatsby"
import "./hero.css"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Box, Container, Heading, Kicker, Section, Text } from "./ui"
import MailchimpForm from "./MailChimpForm"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const images = ["./session.png", "./sketch.png"]

export default function Hero(props) {
  const [currSlide, setCurrSlide] = useState(0)
  return (
    <Section className="container">
      <Container>
        <Box gap={4} variant="responsive" className="flex-container">
          <Box
            className="image-wrapper"
            width="half"
            justifyContent="center"
            style={{
              justifyContent: "center",
            }}
          >
            <Carousel
              autoPlay
              infiniteLoop
              className="carousel"
              interval={4000}
              onChange={(index) => setCurrSlide(index)}
            >
              <Box
                style={{
                  overflow: "hidden",
                }}
                className={`image-container ${
                  currSlide === 0 ? "show" : "hide"
                }`}
              >
                <StaticImage
                  src="./session.png"
                  style={{ borderRadius: "20px" }}
                />
              </Box>
              <Box
                style={{
                  overflow: "hidden",
                }}
                className={`image-container ${
                  currSlide === 1 ? "show" : "hide"
                }`}
              >
                <StaticImage
                  src="./sketch.png"
                  style={{ borderRadius: "20px" }}
                />
              </Box>
              <Box
                style={{
                  overflow: "hidden",
                }}
                className={`image-container ${
                  currSlide === 2 ? "show" : "hide"
                }`}
              >
                <StaticImage
                  src="./timeline.png"
                  style={{ borderRadius: "20px" }}
                />
              </Box>

              <Text color="black" as="h3" style={{ fontSize: "32px" }}>
                And much more...
              </Text>
            </Carousel>
          </Box>
          <Box className="text-content">
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
        </Box>
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
