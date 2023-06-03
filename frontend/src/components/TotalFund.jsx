import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import Footer from './Footer';
import axios from "axios";


const TotalFund = () => {

    const [totalFund, setFund] = useState(0);
    useEffect( () => {
        axios.get("http://www.localhost:4000/api/total-fund")
        .then ((res) => setFund(res.data));
    }, []);

  return (
    <section id="total-fund">
        <Nav/>
        <h1 id="head">Total Fund</h1>
        <div>
            <h1>Total: {totalFund*100} Rs</h1>
        </div>
        <Footer/>
    </section>
  )
}

export default TotalFund