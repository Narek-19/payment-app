"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Logo from "../../../../public/15040.png";
import MenuIcon from "../../../../public/menuIcon.png";
import closeIcon from "../../../../public/close.png";
import Link from 'next/link'
import { PhoneNumber } from "../phoneNumber/PhoneNumber";

const tabs = [
  {
    name:'Home',
    route:''
  },
  {
    name:'Service',
    route:'services'
  },
  {
    name:'About',
    route:'about'
  },
  {
    name:'Contact',
    route:'contact'
  }
];

function useMinWidth(width) {
  const [isMinWidth, setIsMinWidth] =
    useState(false);

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        `(min-width: ${width}px)`
      );
    const handleChange = () =>
      setIsMinWidth(mediaQuery.matches);

    handleChange(); // Check initially
    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
  }, [width]);

  return isMinWidth;
}

const Navbar = () => {
  const [selected, setSelected] =
    useState(tabs[0].route);
  const [menuOpen, setMenuOpen] =
    useState(false);

  const isMin600px = useMinWidth(900);

  useEffect(() => {
    if (isMin600px && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMin600px]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }
  }, [menuOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          width="140"
          height="40"
          alt="apeh service logo"
        />
      </div>
      {!isMin600px && (
        <div
          className={styles.menuIcon}
          onClick={() =>
            setMenuOpen(true)
          }>
          <Image
            src={MenuIcon}
            width="32"
            height="32"
            alt="menu icon"
          />
        </div>
      )}
      {isMin600px && (
        <>
          <div
            className={
              styles.itemContainer
            }>
            <div
              className={
                styles.iconClose
              }></div>
            {tabs.map((tab) => (
              <Link href ={`/${tab.route}`}>
                <Chip
                  tab={tab}
                  selected={
                    selected === tab.route
                  }
                  setSelected={
                    setSelected
                  }
                  key={tab.route}
                />
              </Link>
            ))}
          </div>
          <PhoneNumber />
        </>
      )}
      {menuOpen && (
        <div
          className={
            styles.mobileDesign
          }>
          <div
            className={
              styles.iconClose
            }>
            <div>
              <Image
                className={styles.img}
                onClick={() =>
                  setMenuOpen(false)
                }
                src={closeIcon}
                width="32"
                height="32"
                alt="close icon"
              />
            </div>
          </div>
          {tabs.map((tab) => (
            <Link href ={`/${tab.route}`}>
              <div
                onClick={() =>
                  setMenuOpen(false)
                }>
                <Chip
                  tab={tab}
                  selected={
                    selected === tab.route
                  }
                  setSelected={
                    setSelected
                  }
                  key={tab.route}
                />
              </div>
            </Link>
          ))}
          <div
            className={
              styles.phoneNumber
            }>
            <a href="tel:+1-909-903-0009">
            +1-909-903-0009
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const Chip = ({
  tab,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(tab.route)}
      className={`${
        styles.defaultDesign
      } ${
        selected
          ? styles.textColor
          : styles.tabDesign
      }`}>
      <span className={styles.tabText}>
        {tab.name}
      </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          className={
            styles.itemDesign
          }></motion.span>
      )}
    </button>
  );
};

export default Navbar;
