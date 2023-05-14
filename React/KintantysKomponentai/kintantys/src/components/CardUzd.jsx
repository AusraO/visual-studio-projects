import Picture from "./Picture";

const CardUzd = (props) => {
    return (// atributu pavadinimai turi buti tokie patys kaip ir duomenu kintamajame.
            <div className='manoKortele'>
                <Picture
                source={props.pictureData.source}
                altText={props.pictureData.altText}
                klase={props.pictureData.klase} 
                />
                <p>{props.textBellow}</p>
            </div>
    );
}

export default CardUzd;