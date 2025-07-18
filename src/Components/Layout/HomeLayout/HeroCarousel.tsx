import React from "react";
import { Carousel, Button, Typography, Space, Input } from "antd";
import {
  CalendarOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Search } = Input;

const slides = [
  {
    image: "https://img9.irna.ir/d/r2/2020/04/07/4/157062107.jpg",
    title: "سامانه نوبت‌دهی پزشکی",
    subtitle: "مشاوره آنلاین و حضوری با پزشکان متخصص",
    buttonText: "دریافت نوبت",
    buttonIcon: <CalendarOutlined />,
    buttonLink: "/booking",
  },
  {
    image: "https://media.khabaronline.ir/d/2019/11/25/0/5301116.jpeg",
    title: "خدمات پزشکی آنلاین",
    subtitle: "دسترسی به بهترین پزشکان در تمام تخصص‌ها",
    buttonText: "مشاهده خدمات",
    buttonIcon: <QuestionCircleOutlined />,
    buttonLink: "/services",
  },
  {
    image:
      "https://salemziba.com/wp-content/uploads/2025/01/word-image-25404-1.jpeg",
    title: "همراه شما در سلامت",
    subtitle: "ارائه خدمات پزشکی با بالاترین کیفیت",
    buttonText: "درباره ما",
    buttonIcon: <QuestionCircleOutlined />,
    buttonLink: "/about",
  },
];

const HeroCarousel = () => {
  const onSearch = (value: any) => {
    console.log(value);
    // Implement search functionality
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height:"450px",
        overflow: "hidden",
        minWidth: "300px",
        // height: "clamp(3400px, 100%, 600px)", // Fixed 300px height for mobile, up to 600px for larger screens
      }}
    >
      <Carousel
        autoplay
        autoplaySpeed={5000}
        effect="fade"
        style={{ width: "100%", height: "400px" }}
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ width: "100%", height: "100%" }}>
            <div
              style={{
                height: "400px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <Space
                direction="vertical"
                align="center"
                style={{
                  padding: "10px",
                  borderRadius: "20px",
                  width: "100%",
                  maxWidth: "600px",
                  minWidth: "300px",
                  textAlign: "center",
                }}
              >
                <Title
                  level={3}
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(16px, 5vw, 36px)", // Smaller font for mobile
                    fontWeight: "800",
                    marginBottom: "10px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    width: "100%",
                  }}
                >
                  {slide.title}
                </Title>
                <Text
                  style={{
                    color: "#f0f0f0",
                    fontSize: "clamp(12px, 2.5vw, 18px)", // Smaller font for mobile
                    marginBottom: "15px",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    width: "100%",
                  }}
                >
                  {slide.subtitle}
                </Text>
                <Button
                  type="primary"
                  size="large"
                  icon={slide.buttonIcon}
                  style={{
                    background: "linear-gradient(45deg, #1890ff, #40a9ff)",
                    border: "none",
                    borderRadius: "15px",
                    height: "clamp(35px, 6vw, 48px)", // Adjusted height for mobile
                    fontSize: "clamp(12px, 2vw, 16px)", // Smaller font for mobile
                    fontWeight: "600",
                    padding: "0 20px",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 15px rgba(24, 144, 255, 0.3)",
                    width: "100%",
                    maxWidth: "400px",
                    minWidth: "200px",
                  }}
                  className="hover:scale-105 hover:shadow-lg"
                  onClick={() => (window.location.href = slide.buttonLink)}
                >
                  {slide.buttonText}
                </Button>
              </Space>
            </div>
          </div>
        ))}
      </Carousel>
      <div
        style={{
          position: "absolute",
          top: "350px", // Positions search bar so 50% is below the carousel
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "600px",
          minWidth: "300px",
          padding: "30px 30px",
          zIndex: 0,
          backgroundColor:"white",
          borderRadius:10
          
        }}
      >
        <Search
          placeholder="جستجوی پزشک، تخصص یا خدمات..."
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
          style={{
            width: "100%",
            borderRadius: "15px",
            // boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;