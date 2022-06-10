import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import MailchimpForm from "./MailChimpForm";

export default function Hero(props) {
  return (
    <Flex
      sx={{
        marginTop: "-95px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Flex gap={4}>
        <Box
          justifyContent="center"
          display="flex"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "450px",
              padding: "20px",
              borderRadius: "15px",
            }}
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
        <Box>
          <Text as="h1" color="brand.400">
            {props.kicker && <Text>{props.kicker}</Text>}
            Shaping the future of voice training, with technology
          </Text>
          <Text
            color="primary"
            sx={{
              marginBottom: "50px",
              fontSize: "20px",
            }}
            as="p"
          >
            We are making a platform tailored to{" "}
            <strong>better collaboration </strong>
            between voice teachers and students 🧑‍🏫🤝👩‍🎓
          </Text>
          <MailchimpForm />
        </Box>
      </Flex>
    </Flex>
  );
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
`;
