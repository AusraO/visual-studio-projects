import { useEffect } from "react";
const Heading = (props) => {


useEffect(()=>{
console.log('pirmas krovimas', props)
},[]) //tuscias masyvas nusako i kieno update reaguoti kai ka nors vykdome

useEffect(()=>{
console.log('pasikeite tekstas', props)
},[props.text]) //tuscias masyvas nusako i kieno update reaguoti kai ka nors vykdome. Jei be skliaustu - reaguoja i visus pakitimus

const Tag=`h${props.size}`;
    return ( 
<>
<div>
    <Tag>{props.text}</Tag>
</div>
</>

     );
}
 
export default Heading;