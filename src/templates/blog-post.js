import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './post.module.scss';
import PostTags from './PostTags/PostTags';
import './prism-okaidia.css';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter: post, html } = markdownRemark;
  return (
    <Layout>
      <SEO />
      {/* <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <small>{frontmatter.date}</small>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div> */}

      <div className={styles.postcontainer}>
        <h1>{post.title}</h1>
        <p className={styles.postMeta}>
          {post.date} &mdash; {post.timeToRead} Min Read{' '}
        </p>
        <div className={styles.postMeta}>
          <PostTags tags={post.tags} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <hr />
        {/* <Bio config={config} />
        <div className={styles.postMeta}>
          <SocialLinks postPath={slug} postNode={postNode} />
        </div> */}
      </div>
      {/* <nav>
        <ul className={styles.pagination}>
          <li>
            <Link to={prevslug} rel="prev">
              ← {prevtitle}
            </Link>
          </li>
          <li>
            <Link to={nextslug} rel="next">
              {nexttitle}→
            </Link>
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
