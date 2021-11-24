import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about-us" },
];
const Navigation = () => {
  return (
    <nav>
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
