import React from "react";
import "../styles/Writing.css";
import { ArticleList } from "../helpers/ArticleList";
import Article from "../components/Article";

function Writing() {
  return (
    <div className="writing">
      <h1 className="headline">Writing</h1>
      <div className="writing-section">
        <ul class="list-component-article">
          {ArticleList.map((article) => {
            return (
              <Article
                className="alata-regular"
                title={article.title}
                summary={article.summary}
                img={article.img}
                link={article.link}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Writing;
