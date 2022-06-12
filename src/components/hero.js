import { graphql } from "gatsby"
import * as styles from "./hero.module.css"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Box, Heading, Kicker, Text } from "./ui"
import MailchimpForm from "./MailChimpForm"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import "./carousel.css"

export default function Hero(props) {
  const [currSlide, setCurrSlide] = useState(0)
  return (
    <section className={styles.heroSection}>
      <div className={styles.gridContainer}>
        <div className={styles.carouselContainer}>
          <Carousel
            autoPlay
            infiniteLoop
            className={styles.carousel}
            interval={4000}
            onChange={(index) => setCurrSlide(index)}
          >
            <div className={`card ${currSlide === 0 ? "show" : "hide"}`}>
              <StaticImage
                src="../images/session.png"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <Box className={`card ${currSlide === 1 ? "show" : "hide"}`}>
              <StaticImage
                src="../images/sketch.png"
                style={{ borderRadius: "20px" }}
              />
            </Box>
            <Box className={`card ${currSlide === 2 ? "show" : "hide"}`}>
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
        <Box className={styles.textContainer}>
          {/* {props.kicker && <Kicker>{props.kicker}</Kicker>} */}
          <h3>Singing teachers, vocal coaches, singers...</h3>
          <h1>Say hello to your new best friend.</h1>
          <Text style={{ marginBottom: "20px", marginTop: "10px" }} as="p">
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
