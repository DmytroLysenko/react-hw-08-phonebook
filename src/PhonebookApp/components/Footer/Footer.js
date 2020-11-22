import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const Footer = () => (
  <p className={styles.footerText}>
    <Link className={styles.link} to="/about">Phonebook</Link>, 2020
  </p>
);

export default Footer;
