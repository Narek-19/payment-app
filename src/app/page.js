"use client";

import ScrollAnimation from "react-animate-on-scroll";
import { use, useEffect, useState } from "react";
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
} from "antd";
import { RevealBento } from "./components/RevealBento/RevealBento";
import Image from "next/image";
import AnimationCard from "./components/AnimationCard/AnimationCard";
import { ProposalContent } from "./components/ProposalContent/ProposalContent";
import {ContactSection} from "./components/ContactSection/ContactSection";

const stripePromise = loadStripe(
  process.env
    .NEXT_PUBLIC_STRIPE_PUBLIC_KEY
);

const showLoading = () => {
  setOpen(true);
};

export default function Home() {

  const queryParams = new URLSearchParams(window.location.search)

  const queryPayment = queryParams.get("paymentSuccess")

  console.log(queryPayment,"queryPayment");

  const [open, setOpen] =
    useState(false);

  const [openProposalModal, setOpenProposalModal]=useState(false)

  const [paymentSuccess, setPaymentSuccess] = useState(false);
    
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

  useEffect(()=>{
    if(+queryPayment === 1){
      setPaymentSuccess(true);
    }
  },[queryPayment])

  return (
    <>
    <div name="Home"></div>
    <Modal
    title={<p>Success Payment</p>}
    open={paymentSuccess}
    footer={null}
    onCancel={()=>setPaymentSuccess(false)}
    >
<div>
<h1 style={{textAlign:"center",color:"green"}}> Success! </h1>
<p>Your payment has been processed successfully. Thank you for your purchase!</p>

<p>If you have any questions or need further assistance, feel free to reach out to us.</p>

Thank you for choosing Apeh.Services
</div>
    </Modal>
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
      <Modal
       title={<p>Request a proposal</p>}
       open={openProposalModal}
       footer={null}
       onCancel={() => setOpenProposalModal(false)}
      >
        <ProposalContent/>

      </Modal>
      
      <Navbar />
      {/* header  */}
      <div className={styles.layout}>
      <div
        className={
          styles.headerContainer
        }>
        <div
          className={
            styles.gradientBg
          }></div>

        <div
          class={styles.contentHeader}>
          <h1>
            Grow Your Business with
            Professional Marketing &
            Website Solutions
          </h1>
          <AnimationCard>
            <p >
              Unlock your brand's
              potential with our
              tailored marketing
              strategies and
              cutting-edge website
              design services. We help
              businesses of all sizes
              stand out in the digital
              world by crafting visually
              stunning, high-performing
              websites and implementing
              data-driven marketing
              campaigns.
            </p>
          </AnimationCard>
          <div name="Service"></div>
          <ScrollAnimation
              animateIn="flipInY"
              animateOut="flipOutY">
          <button onClick={()=>setOpenProposalModal(true)}>
              Request a Free Proposal
          </button>
          </ScrollAnimation>
        </div>
      </div>
         
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
              <div
                className={
                  styles.bestMatch
                }>
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
                    An excellent choice
                    for growing <br />{" "}
                    businesses that{" "}
                    <br /> need more
                    resources and
                    insights.
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
                    Fully customizable
                    settings <br />
                    to match your
                    brand’s needs.
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
              <div
                className={
                  styles.bestMatch
                }>
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
                    An excellent choice
                    for growing <br />{" "}
                    businesses that{" "}
                    <br /> need more
                    resources and
                    insights.
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
                    Fully customizable
                    settings <br />
                    to match your
                    brand’s needs.
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
        <div
          className={`${styles.backgroundDesign} ${styles.commingSoon}`}>
          <Card
            className={styles.cards}
            title="Application"
            extra={null}>
            <div
              className={`${styles.cardSection} `}>
              <div
                className={
                  styles.commingSoonCard
                }>
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
      <div name="Contact"></div>
      <div className={styles.contactSection}>
            <ContactSection/>
      </div>
        <div name="About">
          <RevealBento />
        </div>
  
      </div>
    </>
  );
}
