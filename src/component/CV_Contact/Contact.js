import React from 'react'
import './style.css'

function Contact() {

    return (
        <div class="container">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>Liên hệ</h2>
                    <input type="text" class="field" placeholder="Your Name" />
                    <input type="text" class="field" placeholder="Your Email" />
                    <input type="text" class="field" placeholder="Phone" />
                    <textarea placeholder="Message" class="field"></textarea>
                    <button class="btn">Send</button>
                </div>
            </div>
        </div>
    )
}
export default Contact