import React, { useRef } from "react";
import { Card, Row, Col, Typography, Rate, Avatar, Button } from "antd";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { testimonials } from "../../../DataApi/CommentApi";

const { Paragraph, Title } = Typography;

const TestimonialsSection = () => {
  const carouselRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  return (
    <div
      style={{
        padding: "24px",
        marginTop: "10vh",
        marginBottom: "10vh",
        position: "relative",
      }}
    >
      <Title
        level={4}
        style={{
          color: "#1a1a1a",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        سلام دکتر از نگاه کاربران
      </Title>
      <Carousel ref={carouselRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ padding: "8px", gap: "10px" }}>
            <Card
              style={{
                borderRadius: "8px",
                textAlign: "right",
                border: "solid 1px #ececec",
                height: "180px",
                margin: "1vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginBottom: "12px",
                }}
              >
                <Title level={5} style={{ margin: 0, color: "#333" }}>
                  {testimonial.user}
                </Title>
                <Avatar
                  size={40}
                  src={testimonial.avatar}
                  icon={<UserOutlined />}
                  style={{ marginLeft: "12px" }}
                />
              </div>
              <Paragraph
                style={{
                  color: "#666",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                {testimonial.text}
              </Paragraph>
              <Rate
                disabled
                defaultValue={testimonial.rating}
                allowHalf
                style={{ color: "#ffca28" }}
              />
            </Card>
          </div>
        ))}
      </Carousel>
      <Button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "-1%",
          top: "58%",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <LeftOutlined />
      </Button>
      <Button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "-1%",
          top: "58%",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <RightOutlined />
      </Button>
    </div>
  );
};

export default TestimonialsSection;
