import { NavLink } from "react-router-dom";
import styles from "./Navigaation.module.css";
const items = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about-us" },
  { name: "New Commet", to: "/new-comment" },
];
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
