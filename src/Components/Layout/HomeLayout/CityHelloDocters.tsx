import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const CityHelloDocters = () => {
  const cities = [
    { name: "تهران", count: "1000+", link: "#" },
    { name: "مشهد", count: "800+", link: "#" },
    { name: "شیراز", count: "600+", link: "#" },
    { name: "اصفهان", count: "500+", link: "#" },
    { name: "تبریز", count: "400+", link: "#" },
    { name: "قم", count: "300+", link: "#" },
    { name: "اهواز", count: "250+", link: "#" },
    { name: "کرج", count: "200+", link: "#" },
  ];

  return (
    <div style={{ padding: "40px 0" }}>
      <Title
        level={4}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        پزشکان در شهرهای مختلف
      </Title>
      <Row
        gutter={[24, 24]}
        justify="center"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {cities.map((city, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={6} xl={6}>
            <Card
              hoverable
              style={{
                textAlign: "center",
                borderRadius: "12px",
                backgroundColor: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px 10px",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                <EnvironmentOutlined
                  style={{ fontSize: "24px", color: "#2196f3" }}
                />
              </div>
              <Text
                strong
                style={{
                  fontSize: "16px",
                  display: "block",
                  marginBottom: "10px",
                  color: "#333",
                }}
              >
                {city.name}
              </Text>
              <Text
                style={{
                  color: "#666",
                  fontSize: "14px",
                  display: "block",
                }}
              >
                {city.count} پزشک
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CityHelloDocters;
