import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          <a className="article" href={this.props.article.web_url}>{this.props.article.snippet}</a>
          <h6 className="article-source" onClick={this.selectSource}>{this.props.article.source}</h6>
        </div>
      </div>
    );
  }
}

export default Article
