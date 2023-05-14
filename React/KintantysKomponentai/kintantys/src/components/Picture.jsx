const Picture = (props) => {
    return ( //atributus rasome tvarkingai, o skliaustuose taip kaip jie pavadinti duomenu kintamajame ir su props, nes jie kis.
        <img 
        src={props.source}
        alt={props.altText}
        className={props.klase}
        />
     );
}
 
export default Picture;