import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  const backPage1 = () => navigate(-1);

  return (
    <div>
      <p>Page1DetailAですaaaaa。</p>
      <button onClick={backPage1}>戻る</button>
    </div>
  );
};
