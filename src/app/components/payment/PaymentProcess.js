import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { Modal } from "antd";
import { Elements } from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "../../../../lib/convertToSubcurrency";
import CheckoutPage from "../../../../components/CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env
      .NEXT_PUBLIC_STRIPE_PUBLIC_KEY
  );

export const PaymentProcess = (
  props
) => {
  const {
    price,
    titlePlan,
    startCheckout,
    setStartCheckout
  } = props;

  const [open, setOpen] =
    useState(false);

  const [amount, setAmount] =
    useState(1);

  const [title, setTitle] =
    useState("");

  const handleOpenModal = useCallback(
    (amount, title) => {
      setAmount(amount);
      setTitle(title);
      setOpen(true);
    },
    []
  );

  useEffect(() => {
    if(startCheckout){
        handleOpenModal(price, titlePlan);
    }
  }, [startCheckout]);

  return (
    <>
      <Modal
        title={<p>{title}</p>}
        open={open}
        footer={null}
        onCancel={() => {
            setOpen(false)
            setStartCheckout(false)
        }}>
        <div>
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount:
                convertToSubcurrency(
                  amount
                ),
              currency: "usd",
            }}>
            <CheckoutPage
              amount={amount}
            />
          </Elements>
        </div>
      </Modal>
    </>
  );
};
