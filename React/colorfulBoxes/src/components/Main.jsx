import { useContext } from "react";
import {CardContext} from "../contexts/CardContext";
const Main = () => {
    const{boxChanging, reducerTypes,boxes}=useContext(CardContext)
    return (
        <>
            {
                boxes.map(box =>

                    <div className={box.className} 
                    onClick={()=> boxChanging({
                        type: reducerTypes.pirmas,
                        id: box.id
                    })}>
                        <p>{box.name}</p>
                    </div>
                )
            }
        </>
    );
}

export default Main;