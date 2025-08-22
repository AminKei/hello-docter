import React from "react";
import {
  Card,
  Avatar,
  Button,
  Upload,
  Space,
  Divider,
  Typography,
  message,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  CalendarOutlined,
  HeartOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;

// تعریف رابط برای ساختار user
interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  birthDate: string;
  bloodType: string;
  nationalId: string;
  emergencyContact: string;
  insurance: string;
  avatar: string | null;
}

// تعریف رابط برای پراپ‌ها
interface UserInfoCardProps {
  user: User;
  handleUpload: (file: any) => boolean | void; // نوع بازگشتی می‌تواند boolean یا void باشد
  onEdit: () => void;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  user,
  handleUpload,
  onEdit,
}) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    message.success("شما با موفقیت خارج شدید!");
    window.location.href = "/register";
  };
  return (
    <Card style={{ textAlign: "center", marginBottom: 24, borderRadius: 12 }}>
      <Avatar
        size={100}
        src={user.avatar}
        icon={!user.avatar && <UserOutlined />}
        style={{ marginBottom: 24, border: "4px solid #1890ff" }}
      />
      <Upload
        beforeUpload={handleUpload}
        showUploadList={false}
        accept="image/*"
      >
        <Button icon={<UploadOutlined />} block style={{ marginBottom: 16 }}>
          آپلود عکس
        </Button>
      </Upload>
      <Title level={3} style={{ marginBottom: 16 }}>
        {user.name}
      </Title>
      <Divider />
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Text type="secondary">اطلاعات تماس</Text>
          <Space direction="vertical" style={{ width: "100%", marginTop: 8 }}>
            <Text>
              <MailOutlined /> {user.email}
            </Text>
            <Text>
              <PhoneOutlined /> {user.phone}
            </Text>
            <Text>
              <EnvironmentOutlined /> {user.address}
            </Text>
          </Space>
        </div>
        <div>
          <Text type="secondary">اطلاعات شخصی</Text>
          <Space direction="vertical" style={{ width: "100%", marginTop: 8 }}>
            <Text>
              <IdcardOutlined /> کد ملی: {user.nationalId}
            </Text>
            <Text>
              <CalendarOutlined /> تاریخ تولد: {user.birthDate}
            </Text>
            <Text>
              <HeartOutlined /> گروه خونی: {user.bloodType}
            </Text>
          </Space>
        </div>
        <div>
          <Text type="secondary">اطلاعات بیمه</Text>
          <Space direction="vertical" style={{ width: "100%", marginTop: 8 }}>
            <Text>
              <CheckCircleOutlined /> نوع بیمه: {user.insurance}
            </Text>
            <Text>
              <PhoneOutlined /> شماره اضطراری: {user.emergencyContact}
            </Text>
          </Space>
        </div>
      </Space>
      <Divider />
      <Button type="primary" icon={<SettingOutlined />} block onClick={onEdit}>
        ویرایش پروفایل
      </Button>
      <Button
        type="primary"
        block
        style={{ marginTop: 16 }}
        onClick={handleLogout}
      >
        خروج از حساب
      </Button>
    </Card>
  );
};

export default UserInfoCard;
