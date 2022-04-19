import React, {useState} from 'react';
import './contact.css';

function Contact () {
    const [name,SetName] = useState('')
    const [email,SetEmail] = useState('')
    const [message,SetMessage] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const handleInput = (e) => {
        
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
    const checkInput = (e) => {
        const {name,value} = e.target
        
        if (name === 'name'){
            if (value===''){
                setErrorMessage('Name is required')
            }
        }
        if (name === 'email'){
            if (value===''){
                setErrorMessage('Email is required')
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)){
                setErrorMessage('You must enter a valid email')

            }
        }
        if (name === 'message'){
            if (value===''){
                setErrorMessage('Message is required')
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)){
            setErrorMessage('Invalid Email')
            return
        }
        console.log(name,email,message)
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
                        onBlur={checkInput}
                        onChange={handleInput}
                        onClick={()=>setErrorMessage('')}

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
                    onBlur={checkInput}
                    onClick={()=>setErrorMessage('')}
                    placeholder='Email'
                    className="contactInput contactCard"

                    required
                    >
                </input>
                <label htmlFor='message'>Message: </label>

                <textarea
                    name="message"
                    value={message}
                    onBlur={checkInput}
                    onClick={()=>setErrorMessage('')}

                    onChange={handleInput}
                    className="contactMessage contactCard"
                ></textarea>
                <div>{errorMessage}</div>
                <div className="contactBtnContainer">

                <button className="contactBtn">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;