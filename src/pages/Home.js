import React, { useContext, useEffect } from "react";
import "../style/css/home.css";
import Stats from "./homeComponents/Stats.js";
import Values from "./homeComponents/Values";
import Dt from "./homeComponents/Dt";
import Opinions from "./homeComponents/Opinions";
import { useScrollTo } from "react-use-window-scroll";
import WhoTrustedUs from "./homeComponents/WhoTrustedUs";
import { NewsContext } from "../context/NewsContext";
import NewsWindow from "../layouts/NewsWindow";
import { NavLink } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const [news, setNews] = useContext(NewsContext);
  const scrollTo = useScrollTo();
  const scrollDown = () => {
    scrollTo({
      top: 850,
      left: 0,
      behavior: "smooth",
    });
  };
  const db = getFirestore(app);

  const docRef = doc(db, "popup", "notification");
  useEffect(() => {
    async function fetchData() {
      const docSnap = await getDoc(docRef);
      // console.log();
      setNews({
        newsOn: docSnap.data().isActive,
        txt1: docSnap.data().txt1,
        txt2: docSnap.data().txt2,
      });
    }
    fetchData();

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }, []);

  return (
    <div className="page-container">
      {news.newsOn ? <NewsWindow /> : null}
      <div className="header-container">
        <div className="header-span-container">
          <h1>
            <strong>Przetłumaczymy</strong> <br />
            Twoje potrzeby
          </h1>
          <h3>
            Jeśli szukacie Państwo <strong>Tłumacza przysięgłego</strong> lub
            osoby, która przełoży tekst z&nbsp;języka ojczystego na{" "}
            <strong>język obcy</strong> lub odwrotnie to dobrze trafiliście.
            W&nbsp;naszym Biurze możecie Państwo zlecić
            <strong> tłumaczenie</strong> z&nbsp;niemal{" "}
            <strong>każdego języka europejskiego</strong> i&nbsp;nie tylko.
          </h3>
          <NavLink to="/offer" className="nav-btn-desktop">
            <button className="see-offer">Zobacz ofertę</button>
          </NavLink>
        </div>
        <div className="arrow-down-circle" onClick={scrollDown}>
          <div
            className="material-symbols-outlined arrow-down"
            id="scroll-btn"
          ></div>
        </div>
      </div>
      <Stats />
      <Dt />
      <Values />
      <Opinions />
      <div className="test"></div>
      <WhoTrustedUs />
    </div>
  );
};

export default Home;
