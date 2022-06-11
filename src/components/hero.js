import { graphql } from "gatsby"
import "./hero.css"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Box, Heading, Kicker, Text } from "./ui"
import MailchimpForm from "./MailChimpForm"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

export default function Hero(props) {
  const [currSlide, setCurrSlide] = useState(0)
  return (
    <section className="hero-section">
      <div className="grid-container">
        <div className="carousel-wrapper">
          <Carousel
            autoPlay
            infiniteLoop
            className="carousel"
            interval={4000}
            onChange={(index) => setCurrSlide(index)}
          >
            <div className={`card ${currSlide === 0 ? "show" : "hide"}`}>
              <StaticImage
                src="../images/session.png"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <Box
              style={{
                overflow: "hidden",
              }}
              className={`card ${currSlide === 1 ? "show" : "hide"}`}
            >
              <StaticImage
                src="../images/sketch.png"
                style={{ borderRadius: "20px" }}
              />
            </Box>
            <Box
              style={{
                overflow: "hidden",
              }}
              className={`card ${currSlide === 2 ? "show" : "hide"}`}
            >
              <StaticImage
                src="../images/timeline.png"
                style={{ borderRadius: "20px" }}
              />
            </Box>

            <Text color="black" as="h3" style={{ fontSize: "32px" }}>
              And much more...
            </Text>
          </Carousel>
        </div>
        <Box className="text-wrapper">
          <h1>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            Shaping the future of voice training, with technology
          </h1>
          <Text style={{ marginBottom: "10px", marginTop: "30px" }} as="p">
            Voicetrainer is a web app that opens up new possibilities for
            collaboration between voice teachers and their students 🧑‍🏫🤝👩‍🎓
          </Text>
          <Text style={{ marginBottom: "30px" }} as="p">
            Whether you teach in-person or online, our platform will equip{" "}
            <strong>you and your students</strong> with a set of tools that make
            daily teaching and voice workouts easy, fun and effective.
          </Text>

          <MailchimpForm />
        </Box>
      </div>
    </section>
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
