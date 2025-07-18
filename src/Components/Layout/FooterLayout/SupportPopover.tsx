import React from "react";
import { Typography, Space } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const { Text } = Typography;

const SupportPopover = () => {
  return (
    <div style={{ padding: "16px", direction: "rtl" }}>
      <Text strong>Appointments:</Text>
      <Space direction="vertical" style={{ marginTop: "8px" }}>
        <Text>
          <MailOutlined style={{ marginLeft: "8px" }} /> support@medicalapp.com
        </Text>
        <Text>
          <PhoneOutlined style={{ marginLeft: "8px" }} /> 021-12345678
        </Text>
        <Text>Working hours: 8 AM to 8 PM</Text>
      </Space>
    </div>
  );
};

export default SupportPopover;
