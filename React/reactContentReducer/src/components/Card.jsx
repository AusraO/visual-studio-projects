import { useContext } from "react";
import CardContext from "../contexts/CardContext";


// const Card = ({ card }) => {
//     const { statusChanger, deleteCard: sakarMakarIrNeber } = useContext(CardContext) //deleteCard pervadintas i sakarMakar
//     return (<>
//         <div className={`card ${card.status ? 'greenBg' : 'redBg'}`}>
//             <h1>{card.title}</h1>
//             <p onClick={() => statusChanger(card.id)}>
//                 Sis teiginys yra {card.status.toString()}
//             </p>
//             <button onClick={() => sakarMakarIrNeber(card.id)}>
//                 MUHAHA</button>
//         </div>



//     </>);
// }
const Card = ({ card }) => {
    const { korteliuRedagavimas, reducerTypes } = useContext(CardContext) 
    return (<>
        <div className={`card ${card.status ? 'greenBg' : 'redBg'}`}>
            <h1>{card.title}</h1>
            <p onClick={() => korteliuRedagavimas({
               type: reducerTypes.keiciame_statusa,
                id: card.id
            })}>
                Sis teiginys yra {card.status.toString()}
            </p>
            <button onClick={() => korteliuRedagavimas({
                type: reducerTypes.triname,
                id: card.id
            })}>
                MUHAHA</button>
        </div>



    </>);
}
export default Card;