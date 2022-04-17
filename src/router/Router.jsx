import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { Page404 } from "../Page404";
import { UrlParameter } from "../UrlParameter";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/page1" element={<Page1 />}></Route>
      <Route exact path="/page1/detaila" element={<Page1DetailA />}></Route>
      <Route exact path="/page1/detailb" element={<Page1DetailB />}></Route>
      <Route path="/page2" element={<Page2 />}></Route>
      <Route path="/page2/:id" element={<UrlParameter />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
};
