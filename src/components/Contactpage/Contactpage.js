import React from "react";
import './Contactpage.css';
import  { useForm, ValidationError} from "@formspree/react";


function ContactForm(){
    const [state, handleSubmit] = useForm("xayzvzjq");
    if (state.succeeded) {
        return <p>Thanks for contacting Me!</p>;
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                /><br />
                <ValidationError
                    prefix="name"
                    type="text"
                    name="name"
                />
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                /><br />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="What do you have to ask?"
                /><br />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>

    );
}
export default function ContactPage(){
    return(
        <div className="contactpage">
            <ContactForm />
        </div>
    )
}