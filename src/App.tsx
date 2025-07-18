import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import HomePage from "./Pages/HomePage/HomePage";
import BookingPage from "./Pages/BookingPage/BookingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import "antd/dist/reset.css";
import HeaderComponent from "./Components/Layout/HeaderLayout/HeaderComponent";
import FooterComponent from "./Components/Layout/FooterLayout/FooterComponent";
import AllDoctersPage from "./Pages/AllDoctersPage/AllDoctersPage";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh", background: "none" }}>
        <HeaderComponent />
        <Content
          style={{
            padding: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
            minHeight: "calc(100vh - 136px)",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/alldocters" element={<AllDoctersPage />} />
          </Routes>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
};

export default App;
