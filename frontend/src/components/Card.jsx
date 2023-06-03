
import React from 'react'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <section id='card'>
            <h3>Hi! <br /> Razorpay payment <br /> Integration</h3>
                <img src={img} alt='Hi' />
            <button onClick={() => checkoutHandler(amount)}>Donate</button>
        </section>
    )
}

export default Card