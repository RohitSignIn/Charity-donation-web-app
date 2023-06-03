import React from 'react'
import Nav from './Nav'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <section id='payment-success'>
            <Nav/>
            <div>

                <h1 textTransform={"uppercase"}> Order Successful</h1>

                <p>
                    Reference No.{referenceNum}
                </p>

            </div>
        </section>
    )
}

export default PaymentSuccess