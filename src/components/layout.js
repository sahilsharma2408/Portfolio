import React from 'react';
import { Link } from 'gatsby';

const ListLink = props => (
  <li
    style={{
      textShadow: `none`,
      display: `inline-block`,
      marginRight: `1rem`,
      backgroundImage: `none`,
    }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    // <div>
    //   <header className="site-header">
    // <Link to="/">
    //   <h3 style={{ display: `inline` }}>Portfolio</h3>
    // </Link>
    // <ul style={{ listStyle: `none`, float: `right` }}>
    //   <ListLink to="/blogs">Blogs</ListLink>
    //   {/* <ListLink to="/about/">About</ListLink> */}
    //   {/* <ListLink to="/contact/">Contact</ListLink> */}
    // </ul>
    //   </header>
    // <main className="main">{children}</main>
    // </div>
    <div>
      <header className="site-header">
        <div className="header-left">
          <Link to="/">
            <h3 style={{ display: `inline` }}>Portfolio</h3>
          </Link>
        </div>
        <div className="header-right">
          {/* <ul>
            <li>
              <a href="#">Our products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul> */}
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/blogs">Blogs</ListLink>
            {/* <ListLink to="/about/">About</ListLink> */}
            {/* <ListLink to="/contact/">Contact</ListLink> */}
          </ul>
        </div>
        {/* <div className="header-right">
          <button>Buy now</button>
        </div> */}
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
