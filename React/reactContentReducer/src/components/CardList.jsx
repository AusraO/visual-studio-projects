
import { useContext } from "react";
import Card from "./Card";
import CardContext from "../contexts/CardContext";

const CardList = () => {

  const { korteles } = useContext(CardContext);
  // console.log(korteles);
  return (
    <div className='cardList'>
      {
        korteles.map(card => 
          <Card 
            key={card.id}
            card={card}
          />
        )
      }
    </div>
  );
}
 
export default CardList