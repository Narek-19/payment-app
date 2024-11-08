"use client";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../../components/CheckoutPage";
import { convertToSubcurrency } from "../../lib/convertToSubcurrency";
import ChechIcon from "../../public/verifying.png";
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
import Image from "next/image";

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
      <div
        className={styles.cardsPrice}>
        <div
          className={
            styles.backgroundDesign
          }>
          <Card
            className={styles.cards}
            title="Web Site Creating"
            extra={null}>
            <div
              className={
                styles.cardSection
              }>
              <div>
                <div
                  className={
                    styles.header
                  }>
                  Basic
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    1350$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
                <div
                  className={
                    styles.des
                  }>
                  <div>
                    <Image
                      src={ChechIcon}
                      width="16"
                      height="16"
                      alt="checkIcon"
                    />
                  </div>
                  <div>
                    Perfect for
                    individuals <br />{" "}
                    and small
                    businesses.
                  </div>
                </div>
                <Button
                  type="primary"
                  onClick={() =>
                    handleOpenModal(
                      1,
                      "Basic"
                    )
                  }>
                  Select Plan
                </Button>
              </div>
              <div className={styles.bestMatch}>
              <div
                  className={
                    styles.header
                  }>
                  Professional
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    3370$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
                <div
                  className={
                    styles.des
                  }>
                  <div>
                    <Image
                      src={ChechIcon}
                      width="16"
                      height="16"
                      alt="checkIcon"
                    />
                  </div>
                  <div>
                  An excellent choice for growing  <br/>  businesses
                  
                   that <br/> need  more resources and insights.
                  </div>
                </div>
                <Button
                  type="primary"
                  onClick={() =>
                    handleOpenModal(
                      3370,
                      "Professional"
                    )
                  }>
                  Select Plan
                </Button>
              </div>
              <div>
              <div
                  className={
                    styles.header
                  }>
                  Enterprise
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    5250$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
                <div
                  className={
                    styles.des
                  }>
                  <div>
                    <Image
                      src={ChechIcon}
                      width="16"
                      height="16"
                      alt="checkIcon"
                    />
                  </div>
                  <div>
                  Fully customizable settings <br />
                  to match your brand’s needs.
                  </div>
                </div>
                <Button
                  type="primary"
                  onClick={() =>
                    handleOpenModal(
                      5250,
                      "Enterprise"
                    )
                  }>
                  Select Plan
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className={
            styles.backgroundDesign
          }>
           <Card
            className={styles.cards}
            title="Social Marketing"
            extra={null}>
            <div
              className={
                styles.cardSection
              }>
              <div>
                <div
                  className={
                    styles.header
                  }>
                  Basic
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    2200$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
                <div
                  className={
                    styles.des
                  }>
                  <div>
                    <Image
                      src={ChechIcon}
                      width="16"
                      height="16"
                      alt="checkIcon"
                    />
                  </div>
                  <div>
                    Perfect for
                    individuals <br />{" "}
                    and small
                    businesses.
                  </div>
                </div>
                <Button
                  type="primary"
                  onClick={() =>
                    handleOpenModal(
                      2200,
                      "Basic"
                    )
                  }>
                  Select Plan
                </Button>
              </div>
              <div className={styles.bestMatch}>
              <div
                  className={
                    styles.header
                  }>
                  Professional
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    4700$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
                <div
                  className={
                    styles.des
                  }>
                  <div>
                    <Image
                      src={ChechIcon}
                      width="16"
                      height="16"
                      alt="checkIcon"
                    />
                  </div>
                  <div>
                  An excellent choice for growing  <br/>  businesses
                  
                   that <br/> need  more resources and insights.
                  </div>
                </div>
                <Button
                  type="primary"
                  onClick={() =>
                    handleOpenModal(
                      4700,
                      "Professional"
                    )
                  }>
                  Select Plan
                </Button>
              </div>
              <div>
              <div
                  className={
                    styles.header
                  }>
                  Enterprise
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    6300$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
                <div
                  className={
                    styles.des
                  }>
                  <div>
                    <Image
                      src={ChechIcon}
                      width="16"
                      height="16"
                      alt="checkIcon"
                    />
                  </div>
                  <div>
                  Fully customizable settings <br />
                  to match your brand’s needs.
                  </div>
                </div>
                <Button
                  type="primary"
                  onClick={() =>
                    handleOpenModal(
                      6300,
                      "Enterprise"
                    )
                  }>
                  Select Plan
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className={
            `${styles.backgroundDesign} ${styles.commingSoon}`
          }>
        <Card
            className={styles.cards}
            title="Application"
            extra={null}>
            <div
              className={
                `${styles.cardSection} ` 
              }>
                <div className={styles.commingSoonCard}>
                 <h1> Application</h1>
                 <h2>Comming Soon...</h2>
                  </div>
              <div>
                <div
                  className={
                    styles.header
                  }>
                  Basic
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    3700$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
              </div>
              <div>
              <div
                  className={
                    styles.header
                  }>
                  Professional
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    8500$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
              </div>
              <div>
              <div
                  className={
                    styles.header
                  }>
                  Enterprise
                </div>
                <div
                  className={
                    styles.price
                  }>
                  <div
                    className={
                      styles.priceNumber
                    }>
                    9580$
                  </div>
                  <div
                    className={
                      styles.keys
                    }>
                    <div>/creating</div>
                    <div>/support</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <RevealBento />
    </>
  );
}
