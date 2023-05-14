const AllCards = ({ prekes, mazintiSkaiciu, didintiSkaiciu, skaicius, changeStatus, masyvas, setMasyvas, krepselis,krepselioKitimas}) => {
//tikrinam ar krepselyje yra konkrecios prekes id. Tada atvaizduojam toje vietoje prekes kieki
    return (
        <>
       
            <section id="allCards">
                <h1>Rožės</h1>
                <div className="card">
                    {
                        prekes.map(preke =>
                            <div className="oneCard">
                                <img
                                    src={preke.img}
                                    alt={preke.name}
                                    className="image"
                                />
                                <p>{preke.name}</p>
                                <p>{preke.description}</p>
                                <p>Likutis: {preke.howMuch}</p>
                                <p>Kaina: {preke.price}</p>
                                <div className="plusMinus">
                                    <button onClick={()=>krepselioKitimas(preke.id,-1)}
                                    >-</button>
                                    <p>{
                                    krepselis.find(el =>el.id===preke.id)? krepselis.find(el =>el.id===preke.id).kiekis : 0
                                    }</p>
                                    <button onClick={()=>krepselioKitimas(preke.id, 1)}
                                     >+</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default AllCards;