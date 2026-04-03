import { useState, useEffect } from 'react';
import { MockNewsData } from './MockNewsData.js';

function News() {
  const [articles, setArticles] = useState([]);
  const [searchArticle, setSearchArticle] = useState("");


  //using gnews api
  //fetching the api and displaying mock data if there's an error
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://gnews.io/api/v4/top-headlines?lang=en&country=us&apikey=46c632176e234e5f660b272c691dd7b7');
        const data = await response.json();
        setArticles(data.articles || []);
        
      } catch (error) {
        console.error('News fetch failed', error);
        alert("Error fetching news. Now displaying news article from local mock data.");
        setArticles(MockNewsData || []);
      }
    };

    fetchNews();

  }, []);


  //filtering articles based on search
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchArticle.toLowerCase())
  );

  //if searching for an article, display the filtered articles. if there's no input, display all articles
  const articlesToDisplay = searchArticle ? filteredArticles : articles;

  return (
    <>
    <div className="newsSearchDiv">
      <input className="newsSearch" type="text"
            placeholder="Search headlines!"
            value={searchArticle}
            onChange={(e) => setSearchArticle(e.target.value)}
      />
    </div>

    <div className="newsContainer">
      {articlesToDisplay && articlesToDisplay.length > 0 ? (
        articlesToDisplay.map((article, index) => (
        <div key={index} className="articleCard">
          <img src={article.image} alt={article.title} />
          <h3>{article.title || 'News Article'}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
        </div>
      ))
    ) : (
      <p className="noArticles">{searchArticle ? 'No articles match your search.' : 'No articles available at this time.'}</p>
    )}
    </div>
    </>
);
}
  
export default News;