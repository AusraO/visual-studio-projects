import * as Yup from 'yup'
import { useFormik } from 'formik'

const Register = () => {


    const values = {
        email: '',
        userName: '',
        avatarURL: '',
        password: '',
        passwordConfirm: '',
        age: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Prasome tinkamai ivesti elektronini pasta')
            .required('Sis laukelis yra privalomas'),
        userName: Yup.string()
            .min(3, 'vardas turi buti bent 3 simboliu ilgio')
            .max(15, 'vardas turi buti trumpesnis nei 15 simboliu')
            .required('si lauka privaloma uzpildyti'),
        avatarURL: Yup.string()
            .url('Prasome tinkamai irasyti avataro nuoroda'),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required('si lauka privaloma uzpildyti'),
        passwordConfirm: Yup.mixed()
            .oneOf([Yup.ref('password')], 'Slaptazodis turi sutapti')
            .required('si lauka privaloma uzpildyti'),
        age: Yup.number()
            .moreThan(12, 'Vartotojas turi buti vyresnis nei 12 metu')
            .required('si lauka privaloma uzpildyti')
            .typeError('Ivestis turi buti skaicius'),
    })
    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => { console.log(values) }
    })
    return (
        <main>
            <h1>Create New Account</h1>
            <form onSubmit={formik.handleSubmit}>
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
                    <label htmlFor='userName'>User Name:</label>
                    <input
                        type='text'
                        name='userName' id='userName'
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.userName && formik.errors.userName &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.userName}</span>
                    }
                </div>

                <div>
                    <label htmlFor='age'>User Age:</label>
                    <input
                        type='number'
                        name='age' id='age'
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.age && formik.errors.age &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.age}</span>
                    }
                </div>
                <div>
                    <label htmlFor='avatarURL'>Avatar URL:</label>
                    <input
                        type='text'
                        name='avatarURL' id='avatarURL'
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
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        name='password' id='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.passwordConfirm}</span>
                    }
                </div>
                <input type='submit' value='register'/>
            </form>
        </main>
    );
}

export default Register;