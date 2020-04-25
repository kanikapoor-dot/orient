import React, { Component } from "react";
import "./feed.css";
class FeedCard extends Component {
  render() {
    return (
      <div className="feedCard">
        <h3 className="feedTitle">{this.props.feeds.title}</h3>
        <h5 className="feedAuthor">author: {this.props.feeds.author}</h5>
        <hr />
        <article className="feedArticle">
          {this.props.feeds.description}
          <a
            href={this.props.feeds.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </article>
      </div>
    );
  }
}

export default FeedCard;
