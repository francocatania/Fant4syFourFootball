import React from 'react';
import Article from './article.jsx'
import articles from './../../../database/dummyData/dummyArticles.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.getArticles();
  // }

  // getArticles() {
  //   let url = new URL('https://api.nytimes.com/svc/search/v2/articlesearch');
  //   let params = {'q':'football',
  //                 'sort':'newest',
  //                 'api-key': '585b7568aa684df3a17087a5b8f72dab'};
  //   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  //
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     mode: 'no-cors'
  //   })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch(() => alert('ERROR'));
  // }


  render() {
    return (
      <div className="article-list">
        {articles.docs.map((article) =>
          <div className="article" key={article._id} article={article}>{article.snippet}</div>
        )}
      </div>
    );
  }
}

export default Home
