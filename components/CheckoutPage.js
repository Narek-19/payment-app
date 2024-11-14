"use client"

import React, { useEffect, useState } from "react"
import {
    useStripe,
    useElements,
    PaymentElement
} from "@stripe/react-stripe-js"
import { Skeleton } from 'antd';
import { convertToSubcurrency } from "../lib/convertToSubcurrency"
import styles from "./style.module.css";

const CheckoutPage =({amount})=>{
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState();
    const [clientSecret, setClientSecret] = useState();
    const [loading, setLoading] = useState();

    useEffect(()=>{
        fetch("/api/create-payment-intent", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({amount:convertToSubcurrency(amount)})
        })
        .then(res=>res.json())
        .then(data=>setClientSecret(data.clientSecret))
    },[amount]);

    const handleSubmit =async(event)=>{
        event.preventDefault();
        setLoading(true);

        if(!stripe || !elements){
            return;
        }
        const {submitError} = await elements.submit();

        if(submitError){
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        } 

        const {error} = await  stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams:{
                return_url:`https://www.apeh.services/payment-success?amount=${amount}`
            }
        })

        if(error){
            setErrorMessage(error.message);
        }
        setLoading(false);
    }

    if(!clientSecret || !stripe || !elements){
        return <Skeleton/>;
    }

    return (
      <form onSubmit={handleSubmit}>
        {clientSecret && (
          <PaymentElement />
        )}
        <button
        className={styles.button}
          disabled={!stripe || loading}>
          {!loading
            ? `Pay ${amount}$`
            : "Processing"}
        </button>
      </form>
    );

}

export default CheckoutPage;