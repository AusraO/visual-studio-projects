import Picture3 from "./Picture3";

const Card3 = (props) => {
    return ( 
        <div className="manoKortele">
            <h1>{props.headerText}</h1>
            <Picture3
            source3={props.pictureData3.source3}
            altText3={props.pictureData3.altText3}
            klase3={props.pictureData3.altText3}
            />
             <p>{props.paragText}</p>
        </div>
     );
}
 
export default Card3;