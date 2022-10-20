import React, { useState } from "react";

export default function WaitlistForm({ handleSubmit }){
    const [ form_values, set_form_values ] = useState({ fullname: '', email: '' })
    const handle_change = (e) => {
        const { name, value } = e.target;

        set_form_values({...form_values, [name]: value })
    }
    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className="__formField mb-8">
                <label htmlFor="fullname" className=" text-black font-medium mb-4"> Full Name </label> <br />
                <input 
                    id="fullname" 
                    name="fullname" 
                    type="text" 
                    className="__input py-4 px-8 w-full rounded-2xl text-black"
                    onChange={(e)=> handle_change(e)}
                />
            </div>
            <div className="__formField mb-8">
                <label htmlFor="email" className=" text-black font-medium mb-4"> email </label> <br />
                <input 
                    id="email" 
                    name="email" 
                    type="text" 
                    className="__input py-4 px-8 w-full rounded-2xl text-black"
                    onChange={(e)=> handle_change(e)}
                />
            </div>

            <button type="submit" className="w-full bg-white py-4 text-black font-medium rounded-2xl"> Notify Me </button>
        </form>
    )
}