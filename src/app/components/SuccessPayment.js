"use client"

import { Modal } from "antd";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";

export const SuccessPayment = () => {

    const searchParams = useSearchParams()
 
    const queryPayment = searchParams.get('paymentSuccess')
  
  
    console.log(queryPayment,"queryPayment");


    const [paymentSuccess, setPaymentSuccess] = useState(false);


    useEffect(()=>{
        if(+queryPayment === 1){
          setPaymentSuccess(true);
        }
      },[queryPayment])
  return (
    <Modal
      title={<p>Success Payment</p>}
      open={paymentSuccess}
      footer={null}
      onCancel={() =>
        setPaymentSuccess(false)
      }>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "green",
          }}>
          {" "}
          Success!{" "}
        </h1>
        <p>
          Your payment has been
          processed successfully. Thank
          you for your purchase!
        </p>
        <p>
          If you have any questions or
          need further assistance, feel
          free to reach out to us.
        </p>
        Thank you for choosing
        Apeh.Services
      </div>
    </Modal>
  );
};
