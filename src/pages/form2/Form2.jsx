import './form2.css'

import React, { useRef } from "react";

import {Footer} from '../../component/footer/footer'
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
      console.log(e.target[0].value, "EE")
    e.preventDefault();

    console.log(form.current, "sss")

    var templateParams = {
        form_type: e.target[0].value,
        user_name: e.target[1].value,
        no_handphone: e.target[2].value,
        user_email: e.target[3].value,
        address: e.target[4].value,
        nama_bencana: e.target[5].value,
        waktu_kejadian: e.target[6].value,
        lokasi: e.target[7].value,
    };

    emailjs
      .send(
        "service_qlapca8",
        "template_7lbdctt",
        templateParams,
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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-wrapper" id="form">
          <div className="form-wrapper-title">
            <div className="form-wrapper-title-main">
              FORMULIR LAPOR MANG
            </div>
            <div className="form-wrapper-title-main-label">Silahkan masukan data anda disini</div>
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Tujuan Pelaporan</label>
            <input className="form-input" type="text" name="form_type" value="Pengaduan LSM" disabled />
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Nama Lengkap</label>
            <input className="form-input" type="text" name="user_name" required/>
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">No Handphone</label>
            <input className="form-input" type="number" name="no_handphone" required/>
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" name="user_email" required/>
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Judul Laporan</label>
            <input className="form-input" type="text" name="address" required/>
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Deskripsi Laporan</label>
            <textarea className="form-input" type="text" name="nama_bencana" rows="4"
              cols="50" required/>
          </div>

          <div className="form-wrapper-child">
            <label className="form-label">Tanggal Kejadian</label>
            <div
              style={{
                fontSize: 9,
              }}
            >
              *Hari/Bulan/Tahun/Jam
            </div>
            <input className="form-input" type="text" name="waktu_kejadian" required/>
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
              name="lokasi"required
            />
          </div>

          <div className="form-wrapper-child-input">
            <label className="form-label">Upload File Pendukung</label>
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
      <Footer />
    </div>
  );
};

export default Form2;
