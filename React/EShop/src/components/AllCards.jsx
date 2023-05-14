import Card from "./Card";

const AllCards = ( {storeItems, cart, cartChange}) => { //cia tik remelis didysis ir pavadinimas, o atskiros korteles iseina i card dali
    return ( <>
    <section className="allCards">
        <h1>All Gold just for You</h1>
        <div className="cardBig">
            {
                <Card
                storeItems={ storeItems}
                cart={cart}
                cartChange={cartChange}
                />
            }
        </div>
    </section>
    
    
    
    
    </> );
}
 
export default AllCards;