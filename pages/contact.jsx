import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_KEY)
            form.current.reset();
            alert('Email Sent successfullly')
        } catch (error) {
            alert(error.text)
        }
        setLoading(false)
    };
    return (
        <div className="contact">
            <section>
                <h1>Let&apos;s Chat</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='Name'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' required />
                    </div>
                    <div className='Email'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' required />
                    </div>
                    <div className='PhoneNnumber'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel"
                            id='phoneNumber'
                            name='phoneNumber'
                            pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
                            required
                        />
                    </div>
                    <div className="contact-time">
                        <label htmlfor="contact time">Available Time</label>
                        <input type="datetime-local" id="contact time" name="contacttime" required />
                    </div>
                    <div className='Message'>
                        <label htmlFor="message">Message</label>
                        <textarea id='message' name='message' required />
                    </div>
                    <button type='submit' disabled={loading}>{loading ? 'Loading' : 'Submit'}</button>
                </form>
            </section>
        </div>
    )
}

export default Contact