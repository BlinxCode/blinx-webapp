import React from "react";
import { useFormikContext } from "formik";

export default function FormInput({ name, placeholder, ...otherProps}){
    const { values, handleChange } = useFormikContext()
    return (
        <>
            <label htmlFor={name} className=" text-black font-medium mb-4"> { placeholder } </label> <br />
            <input 
                id={name}
                name={name}
                className="__input py-4 px-8 w-full rounded-2xl text-black"
                onChange={handleChange}
                value={values[name]}
                {...otherProps}
            />
        </>
    )
}