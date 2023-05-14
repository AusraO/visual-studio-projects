import{v4 as uuidv4} from 'uuid';


const NewCardForm = ({formInputs, setFormInputs,addNewArticle}) => {

const formSubmit=(e)=>{
    e.preventDefault();
    addNewArticle({
        ...formInputs,
        status: formInputs.status ? 'visited' : 'not visited',
        id: uuidv4()
    })
    setFormInputs({
        status:false,
        name: '',
        image: '',
        description:''

    })
}


// const inputHandler=e=>{
//     if(e.target.type==='checkbox')
//     setFormInputs({
//         ...setFormInputs, 
//         [e.target.name]:e.target.type==='checkbox' > e.target.checked : e.target.value
//     })
// }
// }



    return ( 
        <>
        <section id='newCountry'>
            <h1>Add New Country</h1>
            <form onSubmit={(e)=>{formSubmit(e)}}>
                <div>
                <label 
                htmlFor='name'>Country name</label>
<input type='text'
name='name'
value={formInputs.name}
id='name'
onChange={(e)=>{
    setFormInputs({...formInputs, name: e.target.value})
    // inputHandler(e)}}
}}
/>
</div>
<div>
<label htmlFor='image'>Image </label>
<input
type="url"
name="image"
value={formInputs.image}
id='image'
onChange={(e)=>{
    setFormInputs({...formInputs, image:e.target.value})
}}
/>
</div>
<div>
<label htmlFor='image'>Describe the country </label>
<input
type="textarea"
name="description"
value={formInputs.description}
id='description'
onChange={(e)=>{setFormInputs({...formInputs, description:e.target.value}
)}}/>
</div>
<div>
<label htmlFor='status'>Visited the the country </label>
<input
type="checkbox"
name="status"
checked={formInputs.status}
id='status'
onChange={(e)=>{
    setFormInputs({...formInputs, status:e.target.checked})
}}
/>
</div>
<input type="submit" value="add new country"/>
            </form>
        </section>
        </>
     );
}
 
export default NewCardForm;