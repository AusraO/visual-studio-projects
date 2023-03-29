

const randomColor=() =>{
  
    return `#${Math.floor(Math.random()*(2**24)).toString(16)}`
}
const kita=() =>{
    console.log('haha')
}

export default randomColor;
export {kita};
