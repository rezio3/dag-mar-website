import React, { useState } from "react";
import OfferInnerSection0 from "./OfferInnerSection0";
import OfferInnerSection1 from "./OfferInnerSection1";
import OfferInnerSection2 from "./OfferInnerSection2";
import OfferInnerSection3 from "./OfferInnerSection3";
import OfferInnerSection4 from "./OfferInnerSection4";

const OfferSection = () => {
  const [offer, setOffer] = useState(0);
  const offers = [<OfferInnerSection0 />, <OfferInnerSection1 />, <OfferInnerSection2 />, <OfferInnerSection3 />, <OfferInnerSection4 />];
  const buttonHandler = (e) => {
    setOffer(Number(e.target.id[5]));
  };
  const offerSectionToDisplay = offers[offer];
  return (
    <div className="offer-section-container">
      <div className="offer-section-container__left-box">
        <button
          className={offer === 0 ? "left-box-button active" : "left-box-button"}
          id={"offer0"}
          onClick={buttonHandler}
        >
          Języki tłumaczeń
        </button>
        <button
          className={offer === 1 ? "left-box-button active" : "left-box-button"}
          id={"offer1"}
          onClick={buttonHandler}
        >
          Indywidualne podejście
        </button>
        <button
          className={offer === 2 ? "left-box-button active" : "left-box-button"}
          id={"offer2"}
          onClick={buttonHandler}
        >
          Dokumenty standardowe
        </button>
        <button
          className={offer === 3 ? "left-box-button active" : "left-box-button"}
          id={"offer3"}
          onClick={buttonHandler}
        >
          Wycena dokumentów
        </button>
        <button
          className={offer === 4 ? "left-box-button active" : "left-box-button"}
          id={"offer4"}
          onClick={buttonHandler}
        >
          Tłumaczenia ustne
        </button>
      </div>
      {offerSectionToDisplay}
    </div>
  );
};

export default OfferSection;
