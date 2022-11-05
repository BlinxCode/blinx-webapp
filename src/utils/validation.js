import * as yup from 'yup';

const validate = yup.object().shape({
    email: yup.string().email().required().label("Please Enter Your Email"),
    name: yup.string().required().label("Please Enter Your Fullname")
})

export default {
    validate
}