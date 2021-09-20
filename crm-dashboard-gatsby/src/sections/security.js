/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

const Security = () => {
  const data = useStaticQuery(graphql`
    query {
      privacy: file(relativePath: { eq: "privacy.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 633
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image
              src={
                (data.privacy !== null) | undefined
                  ? data.privacy.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="privacy"
            />
          </Box>
          <SectionHeading
            sx={styles.heading}
            title="Unbeatable privacy &amp; secure data storage subscription"
            description="Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption."
            learnMore="Secure data storage"
          />
        </Box>
      </Container>
    </section>
  );
};

export default Security;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    alignItems: 'center',
    gap: [null, null, null, 6, 14],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(2, 1fr)', '1fr 470px'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    mt: [8, null, null, 0],
  },
};
