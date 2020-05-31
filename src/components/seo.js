import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  siteMetadata: {
    title,
    description,
    canonicalUrl,
    social: { twitter },
  },
}) {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <meta name="image" content={image} /> */}

        {/* OpenGraph tags */}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* <meta name="twitter:image" content={image} /> */}
      </Helmet>
    </>
  );
}

function SEOWithQuery(props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          author {
            name
          }
          organization {
            name
            url
          }
          social {
            twitter
          }
        }
      }
    }
  `);
  return <SEO siteMetadata={siteMetadata} {...props} />;
}

export default SEOWithQuery;
