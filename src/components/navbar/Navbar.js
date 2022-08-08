import { NavLink } from "react-router-dom";
import navStyles from "./Navbar.module.css";

const navlist = [
  "Информационные базы",
  "Рабочие серверы",
  "Администраторы",
  "Менеджеры кластера",
  "Рабочие процессы",
  "Сеансы",
  "Блокировки",
  "Соединения",
  "Профили безопасности",
  "Счетчики потребления ресурсов",
  "Ограничения потребления ресурсов",
];

const renderNavlist = navlist.map((navTitle) => (
  <li>
    <NavLink className={navStyles.navLink} to="/">{navTitle}</NavLink>
  </li>
));

const Navbar = () => {
  return (
    <nav className={navStyles.navWrapper}>
      <ul>{renderNavlist}</ul>
    </nav>
  );
};

export default Navbar;
