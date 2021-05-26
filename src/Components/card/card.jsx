import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE =
  "https://media.vlpt.us/images/playck/post/fe88a954-f019-4367-8953-6ee16ab4caa7/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94.jpg";

const card = ({ card }) => {
  const { name, company, title, email, msg, theme, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} alt="이미지" src={url} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.msg}>{msg}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default card;
