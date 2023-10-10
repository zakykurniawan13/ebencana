import { Footer } from './component/footer/footer'
import React from 'react'
import { useNavigate } from "react-router-dom";

export const SuccessPage = () => {
  let navigate = useNavigate();
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{fontSize: "20px"}}>Terima kasih sudah melakukan pelaporan, laporan anda akan di tindak lanjuti</div>
      <br/>
      <button onClick={() => navigate("/")} style={{
        display: "flex",
        flex: "1",
        fontSize: "24px",
        fontWeight: "normal",
        fontFamily: "Arial, Helvetica, sansSerif",
        wordSpacing: "1",
        margin: "0 30px",
        padding: "8px 40px",
        cursor: "pointer",
        backgroundColor: "#063970",
        borderRadius: "15px",
        color: "white",
        textDecoration: "none",
        alignSelf: "center"
      }}>KEMBALI</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  
    
    
  )
}

