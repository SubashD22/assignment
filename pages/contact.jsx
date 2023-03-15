import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <section>
                <h1>Let's Chat</h1>
                <form action="">
                    <div className='Name'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' />
                    </div>
                    <div className='Email'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' /></div>
                    <div className='Phone number'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id='phoneNumber' name='phoneNumber' /></div>
                    <div className='Message'>
                        <label htmlFor="message">Message</label>
                        <input type="text" id='message' name='message' /></div>
                </form>
            </section>
        </div>
    )
}

export default Contact