import React from 'react';
import { graphql } from 'gatsby';
// import Layout from '../components/layout';
import SEO from '../components/seo';
import Resume from '../components/resume';

// export default function Home() {
//   return (
//     <div>
//       <SEO />
//       <div>HEllo</div>
//     </div>
//   );
// }

const Page = ({ data }) => {
  const resume = data.resumeYaml;
  return (
    <div>
      <SEO />
      <Resume resume={resume} />
    </div>
  );
};

export default Page;

// volunteer {
//   endDate(formatString: "MMM, YYYY")
//   highlights
//   organization
//   position
//   startDate(formatString: "MMM, YYYY")
//   summary
//   url
// }

export const query = graphql`
  query MyQuery {
    resumeYaml {
      basics {
        email
        name
        label
        phone
        url
        summary
        profiles {
          network
          url
          username
        }
      }
      work {
        description
        endDate(formatString: "MMM, YYYY")
        highlights
        location
        name
        startDate(formatString: "MMM, YYYY")
        position
        summary
        url
      }
      education {
        area
        courses
        endDate(formatString: "MMM, YYYY")
        cgpa
        institution
        startDate(formatString: "MMM, YYYY")
        studyType
      }
      awards {
        awarder
        date(formatString: "MMM, YYYY")
        summary
        title
      }
      publications {
        name
        publisher
        releaseDate(formatString: "MMM, YYYY")
        summary
        url
      }
      skills {
        keywords
        level
        name
      }
      languages {
        fluency
        language
      }
      interests {
        keywords
        name
      }
      declaration {
        name
        quote
      }
    }
  }
`;
