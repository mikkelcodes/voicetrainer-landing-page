import * as React from "react";
import { graphql } from "gatsby";
import * as sections from "../components";
import Layout from "../components/Layout";

const IndexPage = (props) => {
  const { homepage } = props.data;

  return (
    <main>
      <Layout {...homepage}>
        {homepage.blocks.map((block) => {
          const { id, blocktype, ...componentProps } = block;
          const Component = sections[blocktype] || <p>Component not found.</p>;
          return <Component key={id} {...componentProps} />;
        })}
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
      }
    }
  }
`;

export default IndexPage;
