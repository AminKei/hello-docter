import React from "react";
import { Card, Row, Col, Space, Tag } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const ServicesSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#029aff",
        padding: "20px",
        borderRadius: "10px",
        color: "white",
      }}
    >
      <Row align="middle" style={{ marginBottom: "20px" }}>
        <Col>
          <h2 style={{ textAlign: "right" }}>سلام دکتر کلینیک</h2>
          <p style={{ textAlign: "center" }}>
            یافتن بهترین متخصصین با مشورت کاربران و بر اساس نظرات کاربران
          </p>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{ marginBottom: "16px" }}
        >
          <Card
            cover={
              <img
                alt="Mental Health"
                style={{ width: "100%", borderRadius: "10px", height:"220px" }}
                src="https://www.highfocuscenters.com/wp-content/uploads/middle-aged-asia-people-old-mom-holding-hands-trust-comfort-help-young-woman-talk-crying-stress-relief-at-home-mum-as-friend-love-care-hold-hand-adult-child-feel-pain-sad-worry-of-life-crisis-issues-stockpack-gettyimages-1024x576.webp"
              />
            }
            style={{
              borderRadius: "10px",
              textAlign: "center",
              padding: "15px",
              height: "auto",
            }}
          >
            <h3>خدمات روانشناسی</h3>
            <Tag color="red">🔴</Tag>
            <p>درمان افسردگی و استرس با روش‌های پیشرفته</p>
            <a href="#">ادامه مطلب</a>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{ marginBottom: "16px" }}
        >
          <Card
            hoverable
            cover={
              <img
                alt="Skincare"
                style={{ width: "100%", borderRadius: "10px", height: "220px" }}
                src="https://iranianclinic.com/wp-content/uploads/2023/06/facial-cleansing.webp"
              />
            }
            style={{
              borderRadius: "10px",
              textAlign: "center",
              padding: "15px",
              height: "auto",
            }}
          >
            <h3>خدمات پوست و زیبایی</h3>
            <Tag color="pink">🌸</Tag>
            <p>بهترین خدمات زیبایی و مراقبت از پوست</p>
            <a href="#">ادامه مطلب</a>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{ marginBottom: "16px" }}
        >
          <Card
            hoverable
            cover={
              <img
                alt="Dental Care"
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://dentalnematolahi.com/wp-content/uploads/2024/01/%D9%84%DB%8C%D8%B3%D8%AA-%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%AF%D9%86%D8%AF%D8%A7%D9%86%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C.webp"
              />
            }
            style={{
              borderRadius: "10px",
              textAlign: "center",
              padding: "15px",
              height: "auto",
            }}
          >
            <h3>خدمات دندانپزشکی</h3>
            <Tag color="cyan">🌟</Tag>
            <p>درمان دندان‌ها با بهترین روش‌های مدرن</p>
            <a href="#">ادامه مطلب</a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
