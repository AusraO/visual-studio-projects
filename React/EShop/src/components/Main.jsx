import AllCards from "./AllCards";

const Main = ( {storeItems, cart, cartChange}) => {
    return ( <>
    <AllCards
     storeItems={storeItems}
     cart={cart}
     cartChange={cartChange}
    />
    </> );
}
 
export default Main;