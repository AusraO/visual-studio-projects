const Image = (props) => { //darome image elementa kuris noresime kad kistu, todel darome su propsais
 
    return ( //grazina paveiksleli su props kurie yra is app.jsx const korteles paimti (duomenu kintamojo)
      <img
        src={props.source}
        alt={props.alternativeText}
        className={props.CSS_class}
      />
    );
  }
   
  export default Image; //keliauja i card.jsx, kuris paskui keliauja i Apps.jsx