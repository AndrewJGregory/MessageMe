import React from "react";

const MessagesAndInput = () => {
  return (
    <section className="messages">
      <div className="under-construction-info">
        <p className="other-text">
          Most recent completed feature: searching users <br />Next up: direct
          messages <br /> This is currently under construction. While you're
          here, check out what else I've done:
        </p>
        <ul className="links">
          <li>
            <a href="https://www.linkedin.com/in/andrewjgregoryajg/">
              <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="http://www.andrewjgregoryajg.com">
              <i className="fa fa-2x fa-globe" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AndrewJGregory/">
              <i className="fa fa-2x fa-github" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="under-construction-img" />
    </section>
  );
};

export default MessagesAndInput;
