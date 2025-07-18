import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { specialties } from "../../../DataApi/specialDocters";
const { Title, Text } = Typography;

const SpecialtyCards: React.FC = () => {
  return (
    <div style={{ padding: "0px", marginTop: "10vh", marginBottom: "10vh" }}>
      <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
        پرطرفدارترین تخصص‌ها
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {specialties.map((specialty, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{
                width: "100%",
                maxWidth: "250px",
                textAlign: "center",
                borderRadius: "8px",
              }}
              cover={
                <img
                  alt={specialty.title}
                  src={specialty.icon}
                  style={{ margin: "20px auto", width: "80px", height: "50%" }}
                />
              }
            >
              <Text
                strong
                style={{ fontSize: "16px", color: "#333", height: "25%" }}
              >
                {specialty.title}
              </Text>
              <Text
                style={{
                  color: "#1890ff",
                  marginTop: "10px",
                  display: "block",
                  height: "25%",
                }}
              >
                {specialty.price}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpecialtyCards;
