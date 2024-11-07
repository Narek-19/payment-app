'use client';

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../../components/CheckoutPage";
import { convertToSubcurrency } from "../../lib/convertToSubcurrency";
import {
  Button,
  Card,
  Modal,
  Steps,
} from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { RevealBento } from "./components/RevealBento/RevealBento";
import AnimationCard from "./components/AnimationCard/AnimationCard";

const stripePromise = loadStripe(
  process.env
    .NEXT_PUBLIC_STRIPE_PUBLIC_KEY
);

const showLoading = () => {
  setOpen(true);
};

export default function Home() {
  const [open, setOpen] =
    useState(false);
  const [amount, setAmount] =
    useState(1);
  const [title, setTitle] =
    useState("");

  const handleOpenModal = (
    amount,
    title
  ) => {
    setAmount(amount);
    setTitle(title);
    setOpen(true);
  };

  return (
    <>
      <Modal
        title={<p>{title}</p>}
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}>
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
      <Navbar />
      <div className={styles.cardsPrice}>
        <div className={styles.backgroundDesign}>

        <Card
          className={styles.cards}
          title="Web Site Creating"
          extra={null}>
          <p>
            Card content and product
            description goes here
          </p>
          <h2>1$</h2>
          <div className={styles.list}>
            <div>
              <CheckCircleOutlined />
            </div>
            <div>Full Access</div>
          </div>
          <div className={styles.list}>
            <div>
              <CloseCircleOutlined />
            </div>
            <div>Support</div>
          </div>
          <div className={styles.list}>
            <div>
              <CloseCircleOutlined />
            </div>
            <div>Time Tracking</div>
          </div>
          <Button
            type="primary"
            onClick={() =>
              handleOpenModal(
                1,
                "Basic"
              )
            }>
            Select PLan
          </Button>
        </Card>
        </div>
        <div className={styles.backgroundDesign}>
        <Card
          className={styles.cards}
          title="Marketing"
          extra={null}>
          <p>
            Card content and product
            description goes here
          </p>
          <h2>100$</h2>
          <div className={styles.list}>
            <div>
              <CheckCircleOutlined />
            </div>
            <div>Full Access</div>
          </div>
          <div className={styles.list}>
            <div>
              <CheckCircleOutlined />
            </div>
            <div>Support</div>
          </div>
          <div className={styles.list}>
            <div>
              <CheckCircleOutlined />
            </div>
            <div>Time Tracking</div>
          </div>
          <Button
            type="primary"
            onClick={() =>
              handleOpenModal(
                100,
                "Standart"
              )
            }>
            Select Plan
          </Button>
        </Card>
        </div>
        <div className={styles.backgroundDesign}>
        <Card
          className={styles.cards}
          title="Selling Products"
          extra={null}>
          <p>
            Card content and product
            description goes here
          </p>
          <h2>200$</h2>
          <div className={styles.list}>
            <div>
              <CheckCircleOutlined />
            </div>
            <div>Full Access</div>
          </div>
          <div className={styles.list}>
            <div>
              <CheckCircleOutlined />
            </div>
            <div>Support</div>
          </div>
          <div className={styles.list}>
            <div>
              <CheckCircleOutlined />
            </div>
            <div>Time Tracking</div>
          </div>
          <Button
            type="primary"
            onClick={() =>
              handleOpenModal(
                200,
                "Premium"
              )
            }>
            Select Plan
          </Button>
        </Card>
        </div>
      </div>
      <RevealBento />
    </>
  );
}
