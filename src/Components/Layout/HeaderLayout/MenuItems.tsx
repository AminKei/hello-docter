import { Menu } from "antd";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <Menu
      mode="vertical"
      style={{
        border: "none",
        textAlign: "right",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      <Menu.Item key="home">
        <Link to="/">خانه</Link>
      </Menu.Item>
      <Menu.Item key="all-docters">
        <Link to="/alldocters">همه پزشک ها</Link>
      </Menu.Item>
      <Menu.Item key="services-consulting">
        <Link to="/services/consulting">مشاوره</Link>
      </Menu.Item>
      <Menu.Item key="services-specialists">
        <Link to="/services/specialists">متخصصین</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">تماس با ما</Link>
      </Menu.Item>
      <Menu.Item key="supprt">
        <Link to="/suport">پشتیبانی</Link>
      </Menu.Item>
      <Menu.Item key="about-team">
        <Link to="/about/team">تیم ما</Link>
      </Menu.Item>
      <Menu.Item key="about-mission">
        <Link to="/about/mission">ماموریت ما</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuItems;
