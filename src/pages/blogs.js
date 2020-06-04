import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-posts">
      <Layout>
        <SEO />
        <h1 className="blogs">Blogs</h1>
        <div className="content-box clearfix">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <article key={post.id} className="post">
                  <Link
                    to={post.frontmatter.slug}
                    className="post-thumbnail"
                    style={{
                      'background-image': `url(${post.frontmatter.cover.childImageSharp.fluid.src})`,
                    }}
                  />
                  <div className="post-content">
                    <h2 className="post-title">
                      <Link to={post.frontmatter.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p> {post.excerpt}</p>
                    <span className="post-date">{post.frontmatter.date}</span>
                    <span className="post-words">1 minute read</span>
                  </div>
                </article>
              );
            })}
        </div>
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            cover {
              childImageSharp {
                # Expected cover image to have 1/2 aspect ratio
                fluid(maxWidth: 1200, maxHeight: 600, quality: 85) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
