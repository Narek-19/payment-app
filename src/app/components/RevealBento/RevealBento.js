"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import CurrentLogo from "../../../../public/15040.png";
import FbIcon from "../../../../public/fbIcon.png";
import Instagram from "../../../../public/instagram.png";
import TikTok from "../../../../public/tiktok.png";
import styles from "./style.module.css";
import Image from "next/image";

export const RevealBento = () => {
  return (
    <div className={styles.revealBento}>
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className={
          styles.containerMainBlock
        }>
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({
  className,
  ...rest
}) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={styles.blockDesign}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block>
    <Image
      src={CurrentLogo}
      width="140"
      height="40"
      alt="apeh service logo"
    />
    <h1 className={styles.blockHeader}>
      From captivating websites to
      dynamic marketing strategies,
      <span
        className={styles.blockSpan}>
        we turn your digital goals 
      </span>
      {" "}into impactful realities.
    </h1>
    <a
      href="#"
      className={
        styles.flexCenterRedHover
      }>
      Contact us
      <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      className={styles.socialBlock}>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className={styles.blovkwhile}>
        <a
          href="#"
          className={
            styles.blockCurrent
          }>
              <Image
      src={FbIcon}
      width="48"
      height="48"
      alt="apeh service logo"
    />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className={styles.blovkwhile}>
        <a
          href="#"
          className={
            styles.blockCurrent
          }>
            <Image
      src={Instagram}
      width="48"
      height="48"
      alt="apeh service logo"
    />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className={styles.blovkwhile}>
        <a
          href="#"
          className={
            styles.blockCurrent
          }>
           <Image
      src={TikTok}
      width="48"
      height="48"
      alt="apeh service logo"
    />
        </a>
      </Block>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className={styles.about}>
    <p className={styles.paragraphAbout}>
      Transform Your Digital Presence with Cutting-Edge Solutions.{" "}
      <span
        className={styles.aboutBlock}>
        Building bold websites, smart marketing strategies, and future-ready digital experiences.
        Our team combines creativity with data-driven insights to craft solutions that are tailored to your goals, whether it’s amplifying your brand, engaging customers, or boosting visibility. Let's take your digital presence to the next level together.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block
    className={styles.locationBlock}>
    <FiMapPin
      className={
        styles.locationBlockPin
      }
    />
    <div
      className={
        styles.paragraphLocation
      }>
      <tbody>
        <tr>
          <td>Address:</td>
          <td>California</td>
        </tr>
        <tr>
          <td>Zip Code:</td>
          <td>40299</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>555 555 555 555</td>
        </tr>
      </tbody>
    </div>
  </Block>
);

const EmailListBlock = () => (
  <Block
    className={styles.emailListBlock}>
    <p
      className={
        styles.emailListFirstParagraph
      }>
      Join mailing list
    </p>
    <form
      onSubmit={(e) =>
        e.preventDefault()
      }
      className={styles.flexItemsForm}>
      <input
        type="email"
        placeholder="Enter your email"
        className={
          styles.emailLinkInput
        }
      />
      <button
        type="submit"
        className={
          styles.emailListBlockBtn
        }>
        <FiMail />
        Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logoSvg}>
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p
        className={
          styles.footerParagraph
        }>
          Apeh Inc - {new Date().getFullYear()}
      </p>
    </footer>
  );
};
