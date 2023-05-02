import { Link, Route, Routes, useHref, useNavigate } from "react-router-dom";

import { App } from "./app";
import { Foto } from "./component/image/foto";
import React from "react";
import { SuccessPage } from "./SuccessPage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/successPage" element={<SuccessPage />} />
      <Route path="/foto" element={<Foto />} />
    </Routes>
  );
};
