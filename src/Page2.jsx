import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <p>Page2です。</p>
      <Link to="/page2/999">Urlパラメーター</Link>
      <br />
      <Link to="/page2/999?name=hoge">クエリパタメータ</Link>
    </div>
  );
};
