import NewCardForm from "./NewCardForm";
import AllCards from "./AllCards";

const Main = ({ articles, changeArticleStatus, deleteArticle, formInputs, setFormInputs,addNewArticle}) => {
  return (
    <main>
        <NewCardForm
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        addNewArticle={addNewArticle}
        />
     
      <AllCards 
        articles={articles}
        changeArticleStatus={changeArticleStatus}
        deleteArticle={deleteArticle}
      />
    </main>
  );
}
 
export default Main;