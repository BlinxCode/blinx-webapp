import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, loading })=> {
    const { handleSubmit } = useFormikContext();
    return (
        <div className="w-full bg-white py-4 text-black font-medium rounded-2xl text-center flex items-center justify-center">
            {!loading && (
                <button 
                    onClick={handleSubmit}
                    type="submit"
                    className="text-black"
                > { title } </button>
            )}
            { loading && (
                <>
                    <p className="text-black"> Submiting... </p>
                </>
            )}
        </div>
    )
}

export default SubmitButton;