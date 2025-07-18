import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Space, Divider, Button, message } from "antd";
import {
  InfoCircleOutlined,
  HeartOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  AccountBookTwoTone,
  UsergroupAddOutlined,
  MailOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import NewsletterForm from "./NewsletterForm";
import SocialMediaButtons from "./SocialMediaButtons";

const { Title, Text } = Typography;

const FooterComponent = () => {
  return (
    <footer
      style={{
        direction: "rtl",
        padding: "48px 0",
        borderTop: "solid 1px #f0f0f0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "#000000",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <HeartOutlined style={{ marginLeft: "8px", fontSize: "20px" }} />
              دسترسی سریع
            </Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Link
                to="/"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                صفحه اصلی
              </Link>
              <Link
                to="/about"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                درباره ما
              </Link>
              <Link
                to="/contact"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                تماس با ما
              </Link>
              <Link
                to="/faq"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                سوالات متداول
              </Link>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "#000000",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <InfoCircleOutlined
                style={{ marginLeft: "8px", fontSize: "20px" }}
              />
              خدمات
            </Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Link
                to="/booking"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                نوبت‌دهی آنلاین
              </Link>
              <Link
                to="/services/telemedicine"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                مشاوره آنلاین
              </Link>
              <Link
                to="/services/lab"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                خدمات آزمایشگاهی
              </Link>
              <Link
                to="/services/pharmacy"
                style={{
                  color: "#000000",
                  transition: "all 0.3s",
                  display: "block",
                }}
                className="hover:text-black hover:scale-105"
              >
                داروخانه آنلاین
              </Link>
            </Space>
          </Col>
        
          <Col xs={24} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "#000000",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <PhoneOutlined style={{ marginLeft: "8px", fontSize: "20px" }} />
              اطلاعات تماس
            </Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Text
                style={{
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MailOutlined style={{ marginLeft: "8px", fontSize: "16px" }} />
                support@medicalapp.com
              </Text>
              <Text
                style={{
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PhoneOutlined
                  style={{ marginLeft: "8px", fontSize: "16px" }}
                />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </Text>
              <Text
                style={{
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EnvironmentOutlined
                  style={{ marginLeft: "8px", fontSize: "16px" }}
                />
                تهران، خیابان اصلی، پلاک ۱۰
              </Text>
              <Text
                style={{
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ClockCircleOutlined
                  style={{ marginLeft: "8px", fontSize: "16px" }}
                />
                ۸ صبح تا ۸ شب
              </Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title
              level={4}
              style={{
                color: "#000000",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <NotificationOutlined
                style={{ marginLeft: "8px", fontSize: "20px" }}
              />
              خبرنامه
            </Title>
            <NewsletterForm />
            <Divider
              style={{
                background: "linear-gradient(to right, #1890ff, #e0e0e0)",
                margin: "24px 0",
              }}
            />
            <Title
              level={5}
              style={{
                color: "#000000",
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              ما را دنبال کنید
            </Title>
            <SocialMediaButtons />
          </Col>
        </Row>
        <Divider
          style={{
            background: "linear-gradient(to right, #1890ff, #e0e0e0)",
            margin: "32px 0",
          }}
        />
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Title
              level={5}
              style={{
                color: "#000000",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <AccountBookTwoTone
                style={{ marginLeft: "8px", fontSize: "18px" }}
                twoToneColor="#1890ff"
              />
              دانلود اپلیکیشن
            </Title>
            <Space size="large">
              <Button
                style={{
                  background: "#ffffff",
                  color: "#1a1a1a",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  transition: "all 0.3s",
                }}
                className="hover:bg-gray-100 hover:scale-105 shadow-md"
                onClick={() => message.info("بزودی در گوگل پلی!")}
              >
                دانلود از گوگل پلی
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#1a1a1a",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  transition: "all 0.3s",
                }}
                className="hover:bg-gray-100 hover:scale-105 shadow-md"
                onClick={() => message.info("بزودی در اپ استور!")}
              >
                دانلود از اپ استور
              </Button>
            </Space>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "right" }}>
            <Title
              level={5}
              style={{
                color: "#000000",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <UsergroupAddOutlined
                style={{ marginLeft: "8px", fontSize: "18px" }}
              />
              گواهینامه‌ها
            </Title>
            <Space size="large">
              <img
                src="https://www.gfiles.ir/file/store/2022/03/21/3736807443.jpg"
                alt="گواهی ۱"
                width={40}
                height={40}
                style={{
                  borderRadius: "8px",
                  transition: "transform 0.3s",
                }}
                className="hover:scale-110"
              />
              <img
                width={40}
                height={40}
                src="https://upload.wikimedia.org/wikipedia/fa/4/4d/IRIMC_logo.png"
                alt="گواهی ۲"
                style={{
                  borderRadius: "8px",
                  transition: "transform 0.3s",
                }}
                className="hover:scale-110"
              />
              <img
                width={40}
                height={40}
                src="https://upload.wikimedia.org/wikipedia/fa/4/4d/IRIMC_logo.png"
                alt="گواهی ۲"
                style={{
                  borderRadius: "8px",
                  transition: "transform 0.3s",
                }}
                className="hover:scale-110"
              />
              <img
                width={40}
                height={40}
                src="https://upload.wikimedia.org/wikipedia/fa/4/4d/IRIMC_logo.png"
                alt="گواهی ۲"
                style={{
                  borderRadius: "8px",
                  transition: "transform 0.3s",
                }}
                className="hover:scale-110"
              />
            </Space>
          </Col>
        </Row>
        <Divider
          style={{
            background: "linear-gradient(to right, #1890ff, #e0e0e0)",
            margin: "32px 0",
          }}
        />
        <Text
          style={{
            color: "#000000",
            textAlign: "center",
            display: "block",
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          © ۱۴۰۴ سامانه نوبت‌دهی آنلاین. تمامی حقوق محفوظ است.
        </Text>
      </div>
    </footer>
  );
};

export default FooterComponent;
