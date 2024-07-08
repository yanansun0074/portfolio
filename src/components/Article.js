import React from "react";

function Article({ title, img, summary, link }) {
  return (
    <a href={link} class="cell-link">
      <div className="card-component-article">
        <div className="image-container">
          <img className="article-cover" src={img} alt="Cover A"></img>
        </div>
        <div className="text-container">
          <h1 className="__title">{title}</h1>
          <p className="__summary">{summary}</p>
        </div>
      </div>
    </a>
  );
}

export default Article;
