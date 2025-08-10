import React from "react";
import { Card, Typography, Button, Statistic, Rate, Badge, Space } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface Doctor {
  available: boolean;
  image: string;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
}

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        background: "#fff",
        width: "100%",
        minWidth: "250px",
        margin: "0 auto",
      }}
      bodyStyle={{ padding: "16px" }}
    >
      <Badge.Ribbon
        text={doctor.available ? "در دسترس" : "غیرفعال"}
        color={doctor.available ? "green" : "red"}
        style={{ fontSize: "12px", fontWeight: "bold", padding: "4px 8px" }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            margin: "0 auto 12px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s",
            }}
            className="hover:scale-110"
          />
        </div>
      </Badge.Ribbon>
      <Title
        level={4}
        style={{
          fontSize: "clamp(16px, 4vw, 20px)",
          fontWeight: "600",
          color: "#1a1a1a",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        {doctor.name}
      </Title>
      <Text
        style={{
          color: "#666",
          fontSize: "clamp(12px, 2.5vw, 14px)",
          display: "block",
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        {doctor.specialty}
      </Text>
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <Rate
          disabled
          defaultValue={doctor.rating}
          allowHalf
          style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "#faad14" }}
        />
      </div>
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <Statistic
          title="سال تجربه"
          value={doctor.experience}
          prefix={<ClockCircleOutlined style={{ color: "#1890ff" }} />}
          valueStyle={{ color: "#1890ff", fontSize: "clamp(14px, 3vw, 18px)", fontWeight: "bold" }}
        />
      </div>
      <Space style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <Button
          type="primary"
          style={{ width: "180px", height: "40px", fontWeight: "600", border: "none", transition: "all 0.3s" }}
          className="hover:scale-105"
          onClick={() => (window.location.href = "/booking")}
        >
          رزرو نوبت
        </Button>
        <Button
          style={{ width: "50px", height: "40px", fontWeight: "600", transition: "all 0.3s" }}
        >
          <ClockCircleOutlined />
        </Button>
      </Space>
    </Card>
  );
};

export default DoctorCard;