import React from "react";
import { Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { doctors } from "../../../DataApi/DataApi";
import DoctorCard from "../../Ui/DoctorCard";

const { Title } = Typography;

const DoctorSlider = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        padding: "0 40px",
      }}
    >
      <Title
        level={4}
        style={{
          textAlign: "center",
          marginBottom: "48px",
          color: "#1a1a1a",
        }}
      >
        پزشکان برجسته
      </Title>
      <Button
        type="text"
        style={{
          position: 'absolute',
          left: '-1%',
          top: '58%',
          transform: 'translateY(-50%)',
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1
        }}
        icon={<LeftOutlined />}
        onClick={() => {
          const container = document.getElementById("doctors-carousel");
          if (container) {
            container.scrollLeft -= 300;
          }
        }}
      />
      <div
        id="doctors-carousel"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "20px 0",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {doctors.map((doctor: any) => (
          <div
            key={doctor.id}
            style={{
              flex: "0 0 280px",
              transition: "transform 0.3s ease",
            }}
          >
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
      <Button
        type="text"
        style={{
          position: 'absolute',
          right: '-1%',
          top: '58%',
          transform: 'translateY(-50%)',
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1
        }}
        icon={<RightOutlined />}
        onClick={() => {
          const container = document.getElementById("doctors-carousel");
          if (container) {
            container.scrollLeft += 300;
          }
        }}
      />
    </div>
  );
};

export default DoctorSlider;
