const Image = (props) => {
    return ( 
        <>
         <img
        src={props.src}
        alt={props.alt}
        className={props.classList}/>
        </>
     );
}
 
export default Image;