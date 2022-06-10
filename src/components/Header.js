import { Container, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";

const Header = () => {
  return (
    <header>
      <Container sx={{ maxWidth: "1024px" }}>
        <Flex justify="space-between" pt="20px">
          <Link to="/">
            <Text
              style={{
                fontSize: "24px",
                letterSpacing: "-0.5px",
                fontWeight: "700",
              }}
            >
              Voicetrainer
            </Text>
          </Link>
          <div>
            <Button to="mailto:operations@voicetrainer.io">
              Get in Touch!
            </Button>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
