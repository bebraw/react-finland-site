import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Link, Moment } from "../components";

const BlogIndex = ({ section }) => (
  <div className="blog-index grid--5col">
    <h1>Blog Posts</h1>

    <ul className="post-list">
      {_.map(section.pages(), (page, i) => (
        <li key={`post-list-item-${i}`}>
          <Link to={`${page.url}`}>
            <h3 className="post-list__heading">{page.file.attributes.title}</h3>

            {page.file.attributes.date ? (
              <Moment
                className="post__moment"
                datetime={page.file.attributes.date}
              />
            ) : null}
            <p className="post-list__preview">{page.file.preview}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

BlogIndex.propTypes = {
  section: PropTypes.object,
};

export default BlogIndex;
