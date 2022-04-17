import { Link, useLocation, useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>ページが見つかりません。</p>
      <Link to="/">TOPへ戻る</Link>
    </div>
  );
};
