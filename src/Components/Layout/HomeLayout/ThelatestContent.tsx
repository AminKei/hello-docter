import React from "react";
import { Card, Button, Row, Col, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ThelatestContent = () => {
  const items = [
    {
      image: "https://img9.irna.ir/d/r2/2020/04/07/4/157062107.jpg",
      title: "آیا کاشت مو برای شما مناسب است؟",
      description: "آیا کاشت مو می‌تواند به بهبود ظاهر شما کمک کند؟",
      likes: "1.2K",
      comments: "45",
    },
    {
      image: "https://media.khabaronline.ir/d/2019/11/25/0/5301116.jpeg",
      title: "بهترین روش‌های کاشت مو",
      description: "با بهترین روش‌های کاشت مو آشنا شوید.",
      likes: "1.5K",
      comments: "67",
    },
    {
      image:
        "https://salemziba.com/wp-content/uploads/2025/01/word-image-25404-1.jpeg",
      title: "مراقبت‌های بعد از کاشت مو",
      description: "چگونه بعد از کاشت مو مراقبت کنید؟",
      likes: "900",
      comments: "23",
    },
    {
      image:
        "https://kashtbama.com/wp-content/uploads/2021/11/%D8%B9%D9%88%D8%A7%D8%B1%D8%B6-%DA%A9%D8%A7%D8%B4%D8%AA-%D9%85%D9%88-%D8%AF%D8%B1-%DA%A9%D8%A7%D8%B4%D8%AA-%D8%A8%D8%A7-%D9%85%D8%A7-min.webp",
      title: "جدیدترین تکنیک‌های کاشت مو",
      description: "با جدیدترین تکنیک‌های کاشت مو آشنا شوید.",
      likes: "1.8K",
      comments: "89",
    },
  ];

  return (
    <div style={{ direction: "rtl" }}>
      <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
        آخرین مطالب مرتبط با سلامتی
      </Title>
      <Row gutter={[16, 16]} justify="center" align="middle">
        {items.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              }
              style={{
                borderRadius: "10px",
                height: "350px",
                padding: "12px",
              }}
            >
              <Card.Meta
                title={
                  <Text strong style={{ fontSize: "16px", color: "#333" }}>
                    {item.title}
                  </Text>
                }
                description={
                  <Text style={{ fontSize: "14px", color: "#666" }}>
                    {item.description}
                  </Text>
                }
              />
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: "12px", color: "#999" }}>
                  لایک: {item.likes}
                </Text>
                <Text style={{ fontSize: "12px", color: "#999" }}>
                  نظرات: {item.comments}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          shape="circle"
          icon={<RightOutlined />}
          style={{ marginLeft: "10px" }}
        />
        <Button shape="circle" icon={<LeftOutlined />} />
      </div>
    </div>
  );
};

export default ThelatestContent;
