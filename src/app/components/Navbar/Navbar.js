'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import styles from './style.module.css'
import Image from "next/image";
import Logo from '../../../../public/15040.png'

const tabs = ["Home", "Service", "About", "Contact"];

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} width="140" height="40" alt = "apeh service logo"/>
      </div>
      <div className={styles.itemContainer}>
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
      </div>
      
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${styles.defaultDesign} ${selected ? styles.textColor : styles.tabDesign}`}
    >
      <span className={styles.tabText}>{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className={styles.itemDesign}
        ></motion.span>
      )}
    </button>
  );
};

export default Navbar;