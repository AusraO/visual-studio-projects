import Card from "./Card";

const AllCards = ({ articles, changeArticleStatus, deleteArticle }) => {
  return (
    <section id='allCards'>
      <h1>Countries</h1>
      <div className='cardsWrapper'>
        {
          articles.map(article => 
            <Card
              key={article.id}
              article={article}
              changeArticleStatus={changeArticleStatus}
              deleteArticle={deleteArticle}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default AllCards;