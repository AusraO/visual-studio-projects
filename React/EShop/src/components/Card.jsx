

const Card = ({ storeItems,cart, cartChange }) => {  
    return (<>
        {
            storeItems.map(storeItem =>//visa kortele susirenderinam is JSON failo. 
                <div className="card">
                    <img
                        src={storeItem.img}
                        alt={storeItem.name}
                        className="picture" />
                    <p>{storeItem.name}</p>
                    <p>{storeItem.price}</p>
                    <div className="plusMinus">
                    <button onClick={()=>cartChange(storeItem.id, -1)}>-</button>
                    <p>{cart.find(element=>element.id===storeItem.id)? //suka cikla per cart elementus ir tikrina ar cart elementu id
                    // yra tokiu paciu kaip storeItem id. Jei randa tokiu elementu tai juos grazina
                    //klaustukas tikrina ar salyga anksciau yra teisinga(true/false).
                    // Jei tokiu elementu yra (elementu su tokiu pat id carte ir storeItemuose), grazina quantity(t.y. kiek tokiu elementu yra).
                    //jei elementu su tokiu pat id carte ir storeItemuose nera tada netenkina salygos (false) ir grazina 0.
                    cart.find(element=>element.id===storeItem.id).quantity:0}</p>
                    <button onClick={()=>cartChange(storeItem.id, +1)}>+</button>
                    </div>
                </div>


            )


        }




    </>);
}

export default Card;