import React from "react";
import { Formik } from "formik";

import AppFormField from "./forms/FormField";
import SubmitButton from "./forms/SubmitButton";

import validationSchema from '../utils/validation';

export default function WaitlistForm({ 
    error, 
    handleSubmit, 
    loading, 
    set_error, 
}){
    const handle_submit = (values, reset_form) =>{
        set_error(false)

        handleSubmit(values, reset_form)
    }

    return (
        <>
            { error && <p> Something failed. Please try again </p> }
            <Formik
                initialValues={{ email: '', name: ''}}
                onSubmit={(values, { resetForm })=> handle_submit(values, resetForm )}
                validationSchema={validationSchema.validate}
            >

                {()=> (
                    <form onSubmit={(e)=> handleSubmit(e)}>
                        <AppFormField 
                            name="name"
                            placeholder="fullname"
                        />

                        <AppFormField 
                            name="email"
                            placeholder="email"
                        />

                        <SubmitButton 
                            title="Notify Me"
                            loading={loading}
                        />
                    </form>
                )}
            </Formik>
        </>
    )
}