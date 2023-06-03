import React from 'react'
import Nav from './Nav';
import Card from './Card'
import Footer from './Footer';

import axios from "axios";


const Home = () => {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "A little change",
            description: "razorpay Payment Integration",
            image: "https://thumbs.dreamstime.com/b/charity-word-cloud-heart-concept-56405290.jpg",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#9376E0"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <section id="main">
            <Nav/>
            <div>
                <div>
                    <h1>A Little Change</h1>
                    <p>Always give without <br /> remembering and always receive <br /> without forgetting</p>
                </div>

                <Card amount={100} img={"./charity.png"} checkoutHandler={checkoutHandler} />

            </div>
            <Footer/>
        </section>
    )
}

export default Home