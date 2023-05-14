import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as generateId } from 'uuid';
import UsersContext from '../../contexts/UsersContext';
import NewMovieContext from '../../contexts/NewMovieContext';
import * as Yup from 'yup'
import {useFormik} from 'formik'
const AddNewMovie = () => {

    const navigate = useNavigate();
    const { currentUser } = useContext(UsersContext);
    const { setNewMovie, NewMovieActionTypes } = useContext(NewMovieContext);
    const [formInputs, setFormInputs] = useState({
        title: '',
        releaseYear: '',
        length: '',
        description: '',
        director: '',
        poster: ''
    });
    const values = {
        title: '',
        releaseYear: '',
        length: '',
        description: '',
        director: '',
        poster: ''
    }
    const inputHandler = e => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        });
    }
    const validationSchema = Yup.object({
        title: Yup.string()
            .min(2, 'movie name must be more than 1 symbol')
            .required('You must write movie name'),
        description: Yup.string()
            .min(10, 'movie description must be more than 10 symbols')
            .max(500, 'movie description must be less than 500 symbols')
            .required('You must provide move description'),
        director: Yup.string()
            .min(2, 'movie director name must be more than 2 symbols')
            .max(30, 'movie director name must be less than 30 symbols')
            .required('You must provide move description'),
        poster: Yup.string()
            .url('Please write movie URL correctly'),
        length: Yup.number()
            .moreThan(30, 'Movie must be longer than 30min')
            .required('You must provide movie length')
            .typeError('Movie length must be written in numbers (minutes)'),
        releaseYear: Yup.number()
            .moreThan(1900, 'Movie must be released later than 1900')
            .required('You must provide movie release year')
            .typeError('Movie release year must be a number'),
    })

    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => { console.log(values) }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
        formHandler(e);
      }

    const formHandler = e => {
        e.preventDefault();
        const newMovie = {
            id: generateId(),
            title: formInputs.title
        }
        setNewMovie({
            type: NewMovieActionTypes.add,
            data: newMovie
        });
        navigate(-1);
    }
    const handleChange = (e) => {
        formik.handleChange(e);
        inputHandler(e);
      }
    return (
        <main>
            <h1>Add New Movie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Movie title:</label>
                    <input type="text"
                        name="title" id="title"
                        value={formInputs.title}
                        onChange={ handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='poster'>Avatar URL:</label>
                    <input
                        type='text'
                        name='poster' id='poster'
                        value={formik.values.avatarURL}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.avatarURL && formik.errors.avatarURL &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.avatarURL}</span>
                    }
                </div>
                <input type="submit" value="Create Post" />
            </form>
        </main>
    );
}

export default AddNewMovie;