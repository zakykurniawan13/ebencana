import "./content.css";

import React, { useRef, useState } from "react";

import bbwss from "../../assets/bbwss.jpg";
import emailjs from "@emailjs/browser";
import karikatur from "../../assets/karikatur.png";
import { useNavigate } from "react-router-dom";

export const Content = () => {
  let navigate = useNavigate();
  return (
    <div className="content-wrapper">
      <img src={bbwss} alt="Ampera" className="headerImg" />
      <div className="image-wrapper">
        <div className="content-wrapper-welcome">
          <img src={karikatur} alt="Karikatur" className="karikaturImg" />
          <div className="content-wrapper-welcome-text"> Selamat Datang di</div>
          <div className="content-wrapper-welcome-text"> LAPOR MANG</div>
          <div className="content-wrapper-welcome-text">
            {" "}
            Balai Besar Wilayah Sungai Sumatera VIII
          </div>
        </div>
      </div>
      <br />
      <br />
      
      <div className="content-wrapper-button">
        <a className="content-wrapper-button-left" href="/form1">
          Aset
        </a>
        <a className="content-wrapper-button-left" href="/form2">
          Pengaduan LSM
        </a>
        <a className="content-wrapper-button-left" href="/form3">
          Pengaduan Terkait PBJ
        </a>
        <a className="content-wrapper-button-left" href="/form4">
          Bencana
        </a>
        <a className="content-wrapper-button-left" href="/form5">
          Pengaduan Pelayanan Publik
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
};
