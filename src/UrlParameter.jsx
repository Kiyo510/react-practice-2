import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <p>UrlParameterページです</p>
      <p>パラメータは {id} です。</p>
      <p>クエリは {query.get("name")}でっす</p>
    </div>
  );
};
