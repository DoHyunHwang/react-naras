import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/`);
  };

  return (
    <div>
      <header className={style.header} onClick={onClick}>
        <div>🌏 NARAS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
