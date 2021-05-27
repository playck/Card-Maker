import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "jongjin",
      company: "wecode",
      title: "Front-End",
      email: "playck23@gmail.com",
      msg: "go high",
      theme: "dark",
      fileName: "jongjin",
      fileURL: null,
    },
    {
      id: "2",
      name: "jongjin",
      company: "wecode",
      title: "Front-End",
      email: "playck23@gmail.com",
      msg: "go high",
      theme: "light",
      fileName: "jongjin",
      fileURL: null,
    },
    {
      id: "3",
      name: "jongjin",
      company: "wecode",
      title: "Front-End",
      email: "playck23@gmail.com",
      msg: "go high",
      theme: "colorful",
      fileName: "jongjin",
      fileURL: null,
    },
  ]);
  const onLogout = () => {
    authService.logout();
  };

  const addCard = (card) => {
    const updatedCard = [...cards, card];
    setCards(updatedCard);
  };

  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onAdd={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
