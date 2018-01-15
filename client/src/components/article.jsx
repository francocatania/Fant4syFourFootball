import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="article-view">
          <a href={this.props.article.web_url}>{this.props.article.snippet}</a>
          <h6 className="source">{this.props.article.source}</h6>
        </div>
      </div>
    );
  }
}

export default Article
