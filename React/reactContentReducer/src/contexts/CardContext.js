import { createContext, useState, useReducer, useEffect } from "react";

const CardContext = createContext()

const reducerTypes = {
    triname: 'triname', //tiesiog vardus sudedame tipams atskiroje vietoje, galima ir kartu reduceryje rasyti
    keiciame_statusa: 'keiciame_statusa',
    prideti_kortele: 'prideti_kortele'
}

const reducer = (state, action) => { //state - dabartine busena(uzduotys), action - kas turi ivykti
    switch (action.type) { //keisime pagal salygas veiksmo tipa
        case reducerTypes.triname: //jeigu triname
            fetch(`http://localhost:8080/cards/${action.id}`, { //tai istrina is jsono id
                method: 'DELETE'
            });
            return state.filter(el => el.id !== action.id); //filtruoja per dabartine busena (state) ir grazina visus elementus kuriu elementu id yra ne toks pats kaip veiksmo id.
        case reducerTypes.keiciame_statusa://jei keiciame statusa
            return state.map(el => { //sukam cikla per state(dabartine busena)
                if (el.id === action.id) {// ziurime jei elemento id yra toks pats kaip veiksmo id
                    fetch(`http://localhost:8080/cards/${action.id}`, { //darome patch i Json serveri
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ status: !el.status })//pataiso, kad status is jsono butu ne element status (t.y. buvo true, dabar false arba atvirksciai)
                    });
                    return {
                        ...el, //grazinam destrukturizuota elementa
                        status: !el.status//kuriame paskeistas statusas is false i true arba atvirksciai
                    }
                } else {
                    return el //jei elemento id nera toks pats kaip veiksmo id grazina tiesiog elementa
                }
            })
        case reducerTypes.prideti_kortele: //jeigu pridedam kortele
            return [...state, action.data]; //grazinam destrukturizuota dabartine busena
        default:
            console.error('Unknown action:', action.type);
            return state;
    }
}



const CardProvider = ({ children }) => {

    const [korteles, korteliuRedagavimas] = useReducer(reducer, []);// reducer apraso kaip state(esama busena) turi buti atnaujinama priklausomai nuo to koki veiksma panaudojame

    useEffect(() => {
        fetch(`http://localhost:8080/cards`) //duomenys pasiimami is serverio
            .then(res => res.json())
            .then(data => data.forEach(el => korteliuRedagavimas({  //kiekvienam elementui taikomas korteliuRedagavimas
                type: reducerTypes.prideti_kortele,// kurio tipas yra prideti kortele
                data: el  // turinys yra elementas
            })));
    }, []);




    // const [cards, setCards] = useState([
    //     {
    //         id: 0,
    //         title: 'Pavasario paskutinis menuo',
    //         status: true
    //     },
    //     {
    //         id: 1,
    //         title: 'menuo iki vasaros',
    //         status: false
    //     },
    //     {
    //         id: 2,
    //         title: 'trys savaites iki kursu galo',
    //         status: false
    //     }
    // ])
    // const darKazkas = "Labas"

    // const statusChanger = (id) => {
    //     setCards(cards.map(card => {
    //         if (card.id === id) {

    //             return {
    //                 ...card,
    //                 status: !card.status
    //             }
    //         } else {
    //             return card
    //         }
    //     }))
    // }
    // const deleteCard = (id) => {
    //     setCards(cards.filter(card => card.id !== id))
    // }
    return (<>
        <CardContext.Provider
            value={{
                korteles,
                korteliuRedagavimas,
                reducerTypes
                // cards,
                // darKazkas,
                // statusChanger,
                // deleteCard
            }}
        >
            {children}
        </CardContext.Provider>
    </>);
}

export { CardProvider };
export default CardContext;