import "./content.css";

import React, { useRef, useState } from "react";

import ampera from "../../assets/ampera.jpg";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export const Content = () => {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qlapca8",
        "template_7lbdctt",
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
      <img src={ampera} alt="Ampera" className="headerImg" />
      <div className="image-wrapper">
        <div className="content-wrapper-button">
          <a className="content-wrapper-button-left" href="#form">
            Mulai
          </a>
          <div className="content-wrapper-button-right" onClick={() => navigate("/foto")} >Petunjuk</div>
        </div>

        <div className="content-wrapper-welcome">
          <div className="content-wrapper-welcome-text"> Selamat Datang di</div>
          <div className="content-wrapper-welcome-text">
            {" "}
            Layanan Umum Pelaporan E-Bencana WS MSBL
          </div>
          <div className="content-wrapper-welcome-text">
            {" "}
            Balai Besar Wilayah Sungai Sumatera VIII
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-wrapper" id="form">
          <div className="form-wrapper-title">
          <div style={{fontSize: "30px", fontWeight: "bold"}}>FORMULIR LAPORAN E-BENCANA</div>
          <div >Silahkan masukan data anda disini</div>
          </div>
          <div className="form-wrapper-child">
            <label className="form-label">Nama Lengkap</label>
            <input className="form-input" type="text" name="user_name" />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" name="user_email" />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Alamat</label>
            <input className="form-input" type="text" name="address" />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">No Handphone</label>
            <input className="form-input" type="number" name="no_handphone" />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Nama Bencana</label>
            <input className="form-input" type="text" name="nama_bencana" />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Waktu Kejadian Bencana</label>
            <div
              style={{
                fontSize: 9,
              }}
            >
              *Hari/Bulan/Tahun/Jam
            </div>
            <input className="form-input" type="text" name="waktu_kejadian" />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">
              Lokasi Kejadian *Mohon isi dengan detail
            </label>
            <textarea
              className="form-input"
              type="text"
              rows="4"
              cols="50"
              name="lokasi"
            />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Foto Kejadian Bencana</label>
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

          <input className="btn-send" type="submit" value="Kirim Data" />
        </div>
      </form>
    </div>
  );
};
