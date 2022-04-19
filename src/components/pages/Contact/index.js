import React, {useState} from 'react';
import './contact.css';

function Contact () {
    const [first,SetFirst] = useState('')
    const [last,SetLast] = useState('')
    const [email,SetEmail] = useState('')
    const [message,SetMessage] = useState('')

    const handleInput = (e) => {
        console.log(e)
        const {name,value} = e.target
        if (name === 'first'){
            SetFirst(value)
        }
        if (name === 'last'){
            SetLast(value)
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
        console.log(first,last,email,message)
    }

    return (
        <div>
            <form  onSubmit={handleSubmit} className="contactContainer">
                <div className='nameContainer contactCard'>
                    <input
                        name='first'
                        type='text'
                        value={first}
                        onBlur={handleInput}
                        onChange={handleInput}
                        placeholder='First Name'
                        className="contactInput"
                        required
                        >
                    </input>
                    <input
                        name='last'
                        type='text'
                        value={last}
                        onChange={handleInput}

                        placeholder='Last Name'
                        className="contactInput"

                        required

                        >
                    </input>

                </div>
                <input
                    name='email'
                    type='email'
                    value={email}
                    onChange={handleInput}

                    placeholder='email'
                    className="contactInput contactCard"

                    required
                    >
                </input>
                <textarea
                    name="message"
                    value={message}
                    onChange={handleInput}
                    className="contactMessage contactCard"
                ></textarea>
                <button className="contactBtn">Submit</button>
            </form>
        </div>
    )
}

export default Contact;