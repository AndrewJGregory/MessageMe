import React from "react";

const FooterLinks = () => {
  return (
    <div className="footer-container">
      <ul className="footer-links">
        <li>
          <a href="https://github.com/AndrewJGregory/">
            <i className="fa fa-2x fa-github" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andrewjgregoryajg/">
            <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="http://andrewjgregoryajg.com">
            <i className="fa fa-2x fa-globe" aria-hidden="true" />
          </a>
        </li>
      </ul>
      <div className="footer-text-container">
        <h3 className="footer-text">
          Made by <a href="http://andrewjgregoryajg.com">Andrew Gregory</a>
        </h3>
      </div>
    </div>
  );
};

export default FooterLinks;
