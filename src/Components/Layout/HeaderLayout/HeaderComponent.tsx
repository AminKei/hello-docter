import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Button,
  Space,
  Tooltip,
  Badge,
  Typography,
  Drawer,
  Grid,
} from "antd";
import {
  UserOutlined,
  NotificationOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import MenuItems from "./MenuItems";
import { Header } from "antd/es/layout/layout";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const HeaderComponent: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const screens = useBreakpoint();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setIsLoggedIn(!!storedUser.email);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 16px",
        position: "sticky",
        top: 0,
        height: screens.xs ? "60px" : "80px",
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: screens.xs ? "space-around" : "space-between",
          height: "100%",
          flexWrap: "wrap",
        }}
      >
        <Space style={{ gap: "0px" }}>
          {!isLoggedIn &&
            (screens.xs ? (
              <Button
                type="primary"
                size="small"
                style={{
                  borderColor: "#1890ff",
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  marginRight: "5px",
                  fontSize: "12px",
                }}
              >
                <Link to="/login">ورود</Link>
              </Button>
            ) : (
              <Button
                type="primary"
                size="middle"
                style={{
                  borderColor: "#1890ff",
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  marginRight: "10px",
                }}
              >
                <Link to="/login">ورود</Link>
              </Button>
            ))}
          {!isLoggedIn &&
            (screens.xs ? (
              <Button
                size="small"
                style={{
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  marginRight: "5px",
                  fontSize: "12px",
                }}
              >
                <Link to="/register">ثبت‌نام</Link>
              </Button>
            ) : (
              <Button
                size="middle"
                style={{
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  marginRight: "10px",
                }}
              >
                <Link to="/register">ثبت‌نام</Link>
              </Button>
            ))}
          {screens.xs ? (
            <Button
              type="primary"
              size="small"
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                borderRadius: "8px",
                transition: "all 0.3s",
                fontSize: "12px",
              }}
            >
              <Link to="/booking">نوبت‌دهی</Link>
            </Button>
          ) : (
            <Button
              type="primary"
              size="middle"
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                borderRadius: "8px",
                transition: "all 0.3s",
              }}
            >
              <Link to="/booking">نوبت‌دهی</Link>
            </Button>
          )}
        </Space>

        <Space
          size={screens.xs ? "small" : "large"}
          style={{ marginLeft: screens.md ? "20px" : "0", gap: "8px" }}
        >
          <Tooltip title="اعلان‌ها">
            <Badge count={5} color="#1890ff">
              <Button
                icon={<NotificationOutlined />}
                shape="circle"
                size={screens.xs ? "small" : "middle"}
                style={{
                  backgroundColor: "#fff",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e6f7ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff")
                }
              />
            </Badge>
          </Tooltip>
          {isLoggedIn && (
            <Link to="/profile">
              <Button
                icon={<UserOutlined />}
                shape="circle"
                size={screens.xs ? "small" : "middle"}
                style={{
                  backgroundColor: "#fff",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e6f7ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff")
                }
              />
            </Link>
          )}
        </Space>

        {screens.md && (
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            style={{
              flex: 1,
              justifyContent: "center",
              border: "none",
              backgroundColor: "white",
              fontSize: screens.lg ? "14px" : "12px",
              fontWeight: 500,
            }}
          >
            <Menu.Item key="contact">
              <Link to="/contact">تماس با ما</Link>
            </Menu.Item>
            <Menu.Item key="about-team">
              <Link to="/about/team">تیم ما</Link>
            </Menu.Item>
            <Menu.Item key="services-consulting">
              <Link to="/services/consulting">مشاوره</Link>
            </Menu.Item>
            <Menu.Item key="supprt">
              <Link to="/suport">پشتیبانی</Link>
            </Menu.Item>
            <Menu.Item key="all-docters">
              <Link to="/alldocters">همه پزشک ها</Link>
            </Menu.Item>
            <Menu.Item key="services-specialists">
              <Link to="/services/specialists">متخصصین</Link>
            </Menu.Item>
            <Menu.Item key="home">
              <Link to="/">خانه</Link>
            </Menu.Item>
          </Menu>
        )}

        <Space
          className={`${screens.md ? "order-1" : "order-2"}`}
          size={screens.xs ? "small" : "middle"}
          style={{ alignItems: "center" }}
        >
          <Title
            level={screens.xs ? 5 : 4}
            style={{
              margin: 0,
              color: "#1890ff",
              backgroundColor: "white",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              marginRight: screens.xs ? "5px" : "10px",
              padding: "15px",
            }}
          >
            <Link to={"/"} style={{ backgroundColor: "white" }}>
              سلام دکتر
            </Link>
            <img
              src="https://png.pngtree.com/png-vector/20220824/ourmid/pngtree-medical-symbol-nurse-diagnostic-vector-png-image_33423234.png"
              width={screens.md ? "40px" : "0px"}
            />
          </Title>
          {!screens.md && (
            <Button
              size={screens.xs ? "middle" : "middle"}
              icon={<MenuOutlined />}
              style={{
                backgroundColor: "#fff",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e6f7ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
              onClick={toggleMobileMenu}
            />
          )}
        </Space>

        <Drawer
          title="منو"
          placement="right"
          onClose={toggleMobileMenu}
          open={mobileMenuVisible}
          width={screens.xs ? "80%" : "380px"}
          bodyStyle={{ padding: 0 }}
          headerStyle={{
            textAlign: "right",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          <MenuItems />
        </Drawer>
      </div>
    </Header>
  );
};

export default HeaderComponent;
