import { useContext, useState } from 'react';
import { v4 as generatedId } from 'uuid'
import DogsContext from '../../contexts/DogsContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledMain = styled.main`
background-color: #F3CC9B;
text-align: center;
padding-bottom: 20px;
>h1{
    padding-top: 10px;
    margin-top: 0px;
}
>form{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
}
`
const StyledInput=styled.input`
      background-color: #351F10;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
`

const AddNewDog = () => {
    const { DogsActionTypes, setDogs } = useContext(DogsContext);
    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        name: '',
        picture: '',
        size: '',
        description: ''
    });

    const inputHandler = (e) => {
        if (e.target.type === 'number') {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.valueAsNumber
            });
        } else {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.value
            });
        }
    }

    const formHandler = e => {
        e.preventDefault();
        const newDog = {
            ...formInputs,
            id: generatedId()
        };
        setDogs({
            type: DogsActionTypes.add,
            data: newDog
        })
        navigate('/dogs')
    }

    return (
        <StyledMain>
            <h1>Add your fa-woof-rite dog breed here</h1>
            <form onSubmit={(e) => formHandler(e)}>
                <div>
                    <label htmlFor='name'>Dog breed:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formInputs.name}
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor='picture'>Dog's picture:</label>
                    <input
                        type="url"
                        name="picture"
                        id="picture"
                        required
                        value={formInputs.picture}
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor='size'>Dog's size:</label>
                    <input
                        type="text"
                        name="size"
                        id="size"
                        required
                        value={formInputs.size}
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        required
                        value={formInputs.description}
                        onChange={(e) => inputHandler(e)}
                    ></textarea>
                </div>
                <StyledInput type='submit' value='Add' />
            </form>
        </StyledMain>

    );
}

export default AddNewDog;