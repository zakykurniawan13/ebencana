import "./content.css";

import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import sop from "../../assets/sop lapor mang.jpg";
import { useNavigate } from "react-router-dom";

export const Content = () => {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mlgoj8k",
        "template_81z1xur",
        form.current,
        "Th0vGbLxyxseyaRfl"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/successPage");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="content-wrapper">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-wrapper" id="form">
          <div className="form-wrapper-title">
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>
              Sampaikan Laporan Anda
            </div>
          </div>
          <div className="form-wrapper-child">
            <input
              className="form-input"
              type="text"
              name="user_name"
              placeholder="Nama"
            />
          </div>

          <div className="form-wrapper-child">
            <input
              className="form-input"
              type="number"
              name="no_handphone"
              placeholder="No Handphone"
            />
          </div>

          <div className="form-wrapper-child">
            <input
              className="form-input"
              type="text"
              name="user_email"
              placeholder="Email"
            />
          </div>

          <div className="form-wrapper-child">
            <input
              className="form-input"
              type="text"
              name="judul_laporan"
              placeholder="Judul Laporan"
            />
          </div>

          <div className="form-wrapper-child">
            <textarea
              className="form-input"
              type="text"
              name="deskripsi_laporan"
              placeholder="Deskripsi Laporan"
              rows="4"
              cols="50"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            />
          </div>

          <div className="form-wrapper-child">
            <input
              className="form-input"
              type="text"
              name="tanggal_kejadian"
              placeholder="Tanggal Kejadian"
            />
          </div>

          <div className="form-wrapper-child">
            <input
              className="form-input"
              type="text"
              name="lokasi_kejadian"
              placeholder="Lokasi Kejadian"
            />
          </div>
          <div className="form-wrapper-child">
            <input
              className="form-input"
              type="file"
              accept="image/png, image/jpeg"
              // required
              // name="my_file"
            />
            <div
              style={{
                fontSize: 9,
                color: "red",
              }}
            >
              Pastikan format file anda .png atau .jpg (Maks 500Kb)
            </div>
            <input
              className="form-input"
              type="file"
              accept="image/png, image/jpeg"
              // required
              // name="my_file"
            />
            <div
              style={{
                fontSize: 9,
                color: "red",
              }}
            >
              Pastikan format file anda .png atau .jpg (Maks 500Kb)
            </div>
            <input
              className="form-input"
              type="file"
              accept="image/png, image/jpeg"
              // required
              // name="my_file"
            />
            <div
              style={{
                fontSize: 9,
                color: "red",
              }}
            >
              Pastikan format file anda .png atau .jpg (Maks 500Kb)
            </div>
            <input
              className="form-input"
              type="file"
              accept="image/png, image/jpeg"
              // required
              // name="my_file"
            />
            <div
              style={{
                fontSize: 9,
                color: "red",
              }}
            >
              Pastikan format file anda .png atau .jpg (Maks 500Kb)
            </div>
          </div>

          <div className="btn-wrapper">
            <input
              className="btn-send"
              style={{
                color: "black",
                backgroundColor: "yellow",
                padding: "10px 2px",
                textAlign: "center",
              }}
              onClick={() => navigate("/foto")}
              value="PETUNJUK"
            />
            <input className="btn-send" type="submit" value="LAPOR!" />
          </div>
        </div>
      </form>
    </div>
  );
};
