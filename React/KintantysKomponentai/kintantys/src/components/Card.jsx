import Image from './image';

const Card = (props) => {  //Card elementas kuris keliauja i app.jsx. jam paduodamas propsas nes noresime kad keistusi info viduje
    return ( //rasom HTML stiliumi vienos korteles sablona. I ji isideda image.jsx su visais atributais, kurie taip pat keisis
        <div className='kortele'> 
        <Image
          source={props.imageData.source}
          alternativeText={props.imageData.alternativeText}
          CSS_class={props.imageData.CSS_class} 
          />
          <h1>{props.heading}</h1>
          <p>{props.paragraph}</p>
  </div>
     );
}
 
export default Card;