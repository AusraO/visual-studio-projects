import Image from "./Image";


const Card = (props) => {

    return (
        <>

            <div
                onClick={() => props.keistiStatusa(props.id)}
                className={
                    `allCards 
                    ${props.completed ? 'completed' : 'notCompleted'}`
                }
            >
                <Image
                    src={props.image.src}
                    alt={props.image.alt}
                    classList={props.image.classList}
                />
                <p>{props.catJobName}</p>
                <p>{props.completed ? 'Atlikta' : "Neatlikta"} </p>


            </div>

        </>
    );
}

export default Card;