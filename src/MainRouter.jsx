import { Link, Route, Routes, useHref, useNavigate } from "react-router-dom";

import { App } from "./app";
import Form1 from "./pages/form1/Form1";
import Form2 from "./pages/form2/Form2";
import Form3 from "./pages/form3/Form3";
import Form4 from "./pages/form4/Form4";
import Form5 from "./pages/form5/Form5";
import { Foto } from "./component/image/foto";
import React from "react";
import { SuccessPage } from "./SuccessPage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/successPage" element={<SuccessPage />} />
      <Route path="/foto" element={<Foto />} />
      <Route path="/form1" element={<Form1/>} />
      <Route path="/form2" element={<Form2/>} />
      <Route path="/form3" element={<Form3/>} />
      <Route path="/form4" element={<Form4/>} />
      <Route path="/form5" element={<Form5/>} />
    </Routes>
  );
};
