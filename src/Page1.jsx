import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const navigate = useNavigate();

  const onClickDetailA = () => navigate("detaila");

  return (
    <>
      <p>kokohaPage1です。</p>
      <Link to={"detaila"} state={arr}>
        DetailA
      </Link>
      <br />
      <Link to="detailb">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
      {/* <Routes>
        <Route exact path="detaila" element={<Page1DetailA />} />
        <Route exact path="detailb" element={<Page1DetailB />} />
      </Routes> */}
    </>
  );
};
