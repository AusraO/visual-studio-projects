import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useContext } from 'react'
import { useState } from 'react'
import NewUsersContext from '../../contexts/NewUserContext'
import { useNavigate } from 'react-router-dom'
import { v4 as generatedId } from 'uuid'

const Register = () => {

    const { NewUsersActionTypes, setNewUsers } = useContext(NewUsersContext);
    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        userName: '',
        avatarURL: '',
        email:'',
        password: ''

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
        const newUser = {
            ...formInputs,
            id: generatedId()
        };
        setNewUsers({
            type: NewUsersActionTypes.add,
            data: newUser
        })
        navigate('/dogs')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
        formHandler(e);
    }

    const handleChange = (e) => {
        formik.handleChange(e);
        inputHandler(e);
    }


    const values = {

        userName: '',
        avatarURL: '',
        email:'',
        password: ''
    

    }

    const validationSchema = Yup.object({

        userName: Yup.string()
            .min(3, 'Name must be at least 3 symbols')
            .max(15, 'Name must be less than 15 symbols')
            .required('You must fill this field'),
        avatarURL: Yup.string()
            .url('Please write avatar url corectly'),
        email: Yup.string()
            .email('Please write your real email adress')
            .required('You must fill this field'),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required('You must fill this field'),
        passwordConfirm: Yup.mixed()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('You must fill this field'),

    })
    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => { console.log(values) }
    })
    return (
        <main>
            <h1>Create New Account</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='userName'>User Name:</label>
                    <input
                        type='text'
                        name='userName' id='userName'
                        value={formik.values.userName}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.userName && formik.errors.userName &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.userName}</span>
                    }
                </div>

                <div>
                    <label htmlFor='avatarURL'>Avatar URL:</label>
                    <input
                        type='text'
                        name='avatarURL' id='avatarURL'
                        value={formik.values.avatarURL}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.avatarURL && formik.errors.avatarURL &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.avatarURL}</span>
                    }
                </div>
                <div>
                    <label htmlFor='email'>Email adress:</label>
                    <input
                        type='email'
                        name='email' id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email && formik.errors.email &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.email}</span>
                    }
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        name='password' id='password'
                        value={formik.values.password}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.password && formik.errors.password &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.password}</span>
                    }
                </div>
                <div>
                    <label htmlFor='passwordConfirm'>Repeat the password:</label>
                    <input
                        type='password'
                        name='passwordConfirm' id='passwordConfirm'
                        value={formik.values.passwordConfirm}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.passwordConfirm}</span>
                    }
                </div>
                <input type='submit' value='Register' />
            </form>
        </main>
    );
}

export default Register;