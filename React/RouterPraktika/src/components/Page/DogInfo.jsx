import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DogInfo = () => {

    const { id } = useParams();
    const [dog, setDog] = useState();

    useEffect(() => {
        fetch(`http://localhost:8081/dogs/${id}`)
            .then(res => res.json())
            .then(data => {setDog(data)
            console.log(data)})
    }, []);

    return (

   
        <main>
            
            {
               
                dog ?
                    <div>
                        <h1>{dog.name}</h1>
                        <img src={dog.picture} alt={dog.name} />
                        <p>Size: {dog.size}</p>
                        <p>Dog's average lifespan: {dog.lifeSpan}</p>
                        <p>Description: {dog.description}</p>
                    </div> :
                    <p>Wof...Something went wrong...</p>
            }
        </main>
    );
}

export default DogInfo;