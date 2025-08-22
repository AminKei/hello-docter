import React from "react";
import { List, Space, Tag, Button, Alert, Typography } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// تعریف رابط برای ساختار appointment
interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
  status: string;
  type: string;
  notes: string;
}

// تعریف رابط برای پراپ‌ها
interface AppointmentsTabProps {
  appointments: Appointment[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const AppointmentsTab: React.FC<AppointmentsTabProps> = ({
  appointments,
  currentPage,
  onPageChange,
}) => {
  return (
    <>
      <List
        dataSource={appointments}
        pagination={{
          current: currentPage,
          pageSize: 2,
          onChange: onPageChange,
        }}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary" ghost block style={{ marginBottom: 8 }}>
                لغو نوبت
              </Button>,
              <Button type="primary" ghost block>
                تغییر زمان
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={
                <Space
                  style={{
                    width: "100px",
                    display: "grid",
                    marginBottom: "10px",
                  }}
                >
                  <Text strong>پزشک: {item.doctor}</Text>
                  <Tag
                    color={
                      item.status === "تایید شده"
                        ? "success"
                        : item.status === "در انتظار"
                        ? "warning"
                        : "error"
                    }
                  >
                    {item.status}
                  </Tag>
                </Space>
              }
              description={
                <Space direction="vertical">
                  <Text>
                    <CalendarOutlined /> تاریخ: {item.date}
                  </Text>
                  <Text>
                    <ClockCircleOutlined /> ساعت: {item.time}
                  </Text>
                  <Text>
                    <FileTextOutlined /> نوع: {item.type}
                  </Text>
                  <Text>
                    <InfoCircleOutlined /> یادداشت: {item.notes}
                  </Text>
                </Space>
              }
            />
          </List.Item>
        )}
      />
      <Alert
        message="یادآور"
        description="نوبت‌های در انتظار را 24 ساعت قبل بررسی کنید."
        type="info"
        showIcon
        style={{ marginTop: 16 }}
      />
    </>
  );
};

export default AppointmentsTab;
