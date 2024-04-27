import React from "react";
import DTimage from "../../img/DT.png";
import Media from "react-media";
import "../../style/css/dt.css";
import { NavLink } from "react-router-dom";

const Dt = () => {
  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <section className="mgr-Dagmara-Toporowska-container" id="section3">
              <div className="DT-container">
                <div className="DT-img">
                  <img src={DTimage} className="DTimage" />
                </div>
                <div className="DT-description">
                  <h2>O NAS</h2>
                  <p>
                    Działalnością związaną z tłumaczeniami zajmujemy się od roku
                    2001. Początkowo swoją ofertę kierowaliśmy do osób, które
                    zainteresowane były wykonaniem tłumaczeń z języka
                    angielskiego. Dynamiczny rozwój naszych usług oraz chęć
                    wyjścia naprzeciw oczekiwaniom kontrahentów sprawiły, że w
                    roku 2005 założyliśmy Biuro Tłumaczeń. Doskonale wiemy jak
                    pomóc naszym Klientom, ponieważ sami również dokonujemy
                    przekładu. Właścicielką Biura jest tłumacz przysięgły języka
                    angielskiego mgr Dagmara Toporowska.
                  </p>
                  <p>
                    Zespół Tłumaczy skupiony wokół naszego biura został dobrany
                    bardzo starannie, gdyż tylko osoby z odpowiednimi
                    predyspozycjami, doświadczeniem, szeroką wiedzą merytoryczną
                    z różnych dziedzini wielkim zaangażowaniem w pracę z
                    tłumaczeniami mogą sprostać zleceniom naszych Klientów.
                  </p>
                  <p>
                    Nieustanne dążenie do perfekcji, dostosowanie kompleksowej
                    oferty do potrzeb Klientów indywidualnych i firm, stawia
                    przed nami coraz nowsze wyzwania, które z dumą realizujemy.
                    Zadowolenie Klientów korzystających z naszych usług jest dla
                    nas priorytetem, dlatego też dołożymy wszelkich starań by
                    Państwa usatysfakcjonować.
                  </p>
                  <NavLink to="/offer" className="nav-btn-desktop">
                    <button className="see-offer2">Zobacz ofertę</button>
                  </NavLink>
                </div>
              </div>
            </section>
          ) : (
            <section className="mgr-Dagmara-Toporowska-container" id="section3">
              <div className="DT-container">
                <div className="DT-description">
                  <h2>O NAS</h2>
                  <p>
                    Działalnością związaną z tłumaczeniami zajmujemy się od roku
                    2001. Początkowo swoją ofertę kierowaliśmy do osób, które
                    zainteresowane były wykonaniem tłumaczeń z języka
                    angielskiego. Dynamiczny rozwój naszych usług oraz chęć
                    wyjścia naprzeciw oczekiwaniom kontrahentów sprawiły, że w
                    roku 2005 założyliśmy Biuro Tłumaczeń. Doskonale wiemy jak
                    pomóc naszym Klientom, ponieważ sami również dokonujemy
                    przekładu. Właścicielką Biura jest tłumacz przysięgły języka
                    angielskiego mgr Dagmara Toporowska.
                  </p>
                  <p>
                    Zespół Tłumaczy skupiony wokół naszego biura został dobrany
                    bardzo starannie, gdyż tylko osoby <br />z odpowiednimi
                    predyspozycjami, doświadczeniem, szeroką wiedzą merytoryczną
                    z różnych dziedzini wielkim zaangażowaniem w pracę <br /> z
                    tłumaczeniami mogą sprostać zleceniom naszych Klientów.
                  </p>
                  <p>
                    Nieustanne dążenie do perfekcji, dostosowanie kompleksowej
                    oferty do potrzeb Klientów indywidualnych <br />i firm,
                    stawia przed nami coraz nowsze wyzwania, które z dumą
                    realizujemy. Zadowolenie Klientów korzystających z naszych
                    usług jest dla nas priorytetem, dlatego też dołożymy
                    wszelkich starań by Państwa usatysfakcjonować.
                  </p>
                  <div className="button-and-DT-img">
                    <button className="see-offer2">Zobacz ofertę</button>
                    <div className="DT-img-container">
                      <div className="DT-img">
                        <img src={DTimage} className="DTimage" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Media>
    </>
  );
};

export default Dt;
