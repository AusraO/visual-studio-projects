import Picture2 from "./Picture2";

const CardUzd2 = (props) => {
    return ( 
<div className="manoKortele">
    <Picture2
    source2={props.pictureData2.source2}
altText2={props.pictureData2.altText2}
    klase2={props.pictureData2.klase2}
    />
    <p>{props.textBellow2}</p>
</div>

     );
}
 
export default CardUzd2;