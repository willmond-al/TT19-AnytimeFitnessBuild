import * as yup from 'yup'

export const signInFormSchema = yup.object().shape({
    username: yup
        .string()
        .required('Please enter a username')
        .min(8, 'Username must be at least 8 characters'),
    password: yup
        .string()
        .required('Please enter a password')
        .min(8, 'Password must be at least 8 characters')
})