import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8080/countries')
      .then(res => res.json())
      .then(data => setArticles(data))
  }, []);


  
  const changeArticleStatus = (id) => {
    setArticles(articles.map(article => {
      if(article.id === id){
        fetch(`http://localhost:8080/countries/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({status: article.status === 'visited' ? 'not visited' : 'visited'})
        })
        return {
          ...article,
          status: article.status === 'visited' ? 'not visited' : 'visited'
        }
      } else {
        return article;
      }
    }));
  }
  const deleteArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
    fetch(`http://localhost:8080/countries/${id}`, {
      method: 'DELETE'
    });
  }
  const addNewArticle = (article) => {
    console.log(article);
    setArticles([ ...articles, article ]);
    fetch('http://localhost:8080/countries', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(article)
    });
  }

  const [loggedIn, setLoggedIn] = useState(true);
  const changeLogInStatus = () => {
    setLoggedIn(!loggedIn);
  }

  const [formInputs, setFormInputs] = useState({
    status: false,
    name: '',
    image: '',
    description: ''
  });

  return (
    <>
      <Header
        visitedCountries={articles.filter(article => article.status === 'visited').length}
        loggedIn={loggedIn}
        changeLogInStatus={changeLogInStatus}
      />
      <Main
        articles={articles}
        changeArticleStatus={changeArticleStatus}
        deleteArticle={deleteArticle}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        addNewArticle={addNewArticle}
      />
    </>
  );
}

export default App;