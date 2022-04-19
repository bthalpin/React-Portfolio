import React, {useState} from 'react';
import './contact.css';

function Contact () {
    const [name,SetName] = useState('')
    const [email,SetEmail] = useState('')
    const [message,SetMessage] = useState('')

    const handleInput = (e) => {
        console.log(e)
        const {name,value} = e.target
        if (name === 'name'){
            SetName(value)
        }
        if (name === 'email'){
            SetEmail(value)
        }
        if (name === 'message'){
            SetMessage(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form  onSubmit={handleSubmit} className="contactContainer">
                {/* <div className='nameContainer contactCard'> */}
                    <label htmlFor='name'>Name: </label>
                    <input
                        name='name'
                        type='text'
                        value={name}
                        onBlur={handleInput}
                        onChange={handleInput}
                        placeholder='Name'
                        className="contactInput contactCard"
                        required
                        >
                    </input>
                    

                {/* </div> */}
                <label htmlFor='email'>Email: </label>

                <input
                    name='email'
                    type='email'
                    value={email}
                    onChange={handleInput}

                    placeholder='Email'
                    className="contactInput contactCard"

                    required
                    >
                </input>
                <label htmlFor='message'>Message: </label>

                <textarea
                    name="message"
                    value={message}
                    onChange={handleInput}
                    className="contactMessage contactCard"
                ></textarea>
                <div className="contactBtnContainer">

                <button className="contactBtn">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;