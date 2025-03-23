"use client";

import React, {
  useEffect,
  useState,
} from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Skeleton } from "antd";
import { convertToSubcurrency } from "../lib/convertToSubcurrency";
import styles from "./style.module.css";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [
    isPaymentReady,
    setIsPaymentReady,
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState();
  const [
    clientSecret,
    setClientSecret,
  ] = useState(undefined);

  const [loading, setLoading] =
    useState();

  useEffect(() => {
    if (
      clientSecret !== undefined &&
      stripe !== null
    ) {
      setTimeout(() => {
        setIsPaymentReady(true);
      }, 8000);
    }

    return () =>
      setIsPaymentReady(false);
  }, [stripe, clientSecret]);

  useEffect(() => {
    fetch(
      "/api/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          amount:
            convertToSubcurrency(
              amount
            ),
        }),
      }
    )
      .then((res) => res.json())
      .then((data) =>
        setClientSecret(
          data.clientSecret
        )
      );
  }, [amount]);

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }
    const { submitError } =
      await elements.submit();

    if (submitError) {
      setErrorMessage(
        submitError.message
      );
      setLoading(false);
      return;
    }

    const { error } =
      await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `https://www.apeh.services?amount=${amount}&paymentSuccess=${1}`,
        },
      });

    if (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  if (
    !clientSecret ||
    !stripe ||
    !elements
  ) {
    return <Skeleton />;
  }

  return (
    <form onSubmit={handleSubmit}>
      {clientSecret && (
        <PaymentElement />
      )}

      {isPaymentReady ? (
        <button className="w-full bg-[#0e537e] text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-[#0c4568] transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98] mt-2.5 cursor-pointer">
          {isPaymentReady
            ? `Pay ${amount}`
            : "Processing..."}
        </button>
      ) : (
        <div className="w-full bg-[#8a9aa3] text-white py-4 px-8 rounded-xl text-lg font-semibold mt-2.5">
          Processing ... 
        </div>
      )}
    </form>
  );
};

export default CheckoutPage;
