import { useContext, useState } from 'react';
import { v4 as generatedId } from 'uuid'
import DogsContext from '../../contexts/DogsContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledFormMain = styled.main`
background-color: bisque;
border: 1px solid black;

`



const AddNewDog = () => {
    const { DogsActionTypes, setDogs } = useContext(DogsContext);
    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        name: '',
        picture: '',
        size: '',
        lifeSpan: '',
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
        <StyledFormMain>
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
                        value={formInputs.name}
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor='lifeSpan'>Dog's average lifespan:</label>
                    <input
                        type="text"
                        name="lifeSpan"
                        id="lifeSpan"
                        required
                        value={formInputs.name}
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
                <input type='submit' value='Add' />
            </form>
        </StyledFormMain>

    );
}

export default AddNewDog;