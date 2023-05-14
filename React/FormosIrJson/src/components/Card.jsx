import { useEffect } from "react";

const Card = ({ article, changeArticleStatus,deleteArticle }) => {

  useEffect(()=>{ //padaro, kad console,log tik viena kart butu iskvieciama, o ne istisai kiekvieno render metu
    console.log(article);
    return()=>{
        console.log('buvo istrintas article', article)
    }
  }, []) //nusako, kad vykdyti viena kart kai komponentas uzsikrauna.eigu lauztiniuse skliaustuose nurodai koki nors kintamaji, tai useEffect vykdosi kiekviena karta, kai pasikeicia skliausteliuose nurodyti kintamieji
  useEffect(()=>{
    console.log('buvo keistas statusas:', article.id)
  }, [article]) //kai skliaustai uzpildyti sako, kad useEffect stebi tik situos duomenis
  return (
    <div 
      className={`card ${article.status === 'visited' ? 'visited' : 'not-visited'}`}
    >
      <h1>{article.name}</h1>
      <img 
        src={article.image} 
        alt={article.name}
      />
      <p>{article.description}</p>
      <span onClick={()=> changeArticleStatus(article.id)}>
        {article.status}</span>
        <button
        onClick={()=> deleteArticle(article.id)}
        >Trinti</button>
    </div>
  );
}
 
export default Card;