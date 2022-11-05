import React from 'react';
import { useFormikContext } from 'formik';

// components
import FormInput from './FormInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, placeholder, ...otherProps})=> {
    const { errors, touched, } = useFormikContext();
    return (
        <div className="__formField mb-8">
            <FormInput 
                name={name}
                placeholder={placeholder}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </div>
    )
}

export default AppFormField;