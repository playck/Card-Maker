import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
      id: "2",
      name: "jongjin",
      company: "wecode",
      title: "Front-End",
      email: "playck23@gmail.com",
      msg: "go high",
      theme: "dark",
      fileName: "jongjin",
      fileURL: null,
    },
    3: {
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
  });
  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updatedCards = { ...cards };
      updatedCards[card.id] = card;
      return updatedCards;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updatedCards = { ...cards };
      delete updatedCards[card.id];
      return updatedCards;
    });
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
        <Editor
          FileInput={FileInput}
          cards={cards}
          onAdd={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
