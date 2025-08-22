import React from "react";
import {
  Modal,
  Card,
  Avatar,
  Space,
  Button,
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
} from "@ant-design/icons";

const { Title, Text } = Typography;

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

interface UserModalProps {
  visible: boolean;
  onCancel: () => void;
  user: User;
  onEdit: () => void;
}

const UserModal: React.FC<UserModalProps> = ({
  visible,
  onCancel,
  user,
  onEdit,
}) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    message.success("شما با موفقیت خارج شدید!");
    window.location.href = "/register";
  };

  return (
    <Modal
      title="اطلاعات کاربر"
      open={visible}
      onCancel={onCancel}
      footer={null}
      style={{ direction: "rtl" }}
      width={400}
    >
      <Card>
        <Avatar
          size={100}
          src={user.avatar}
          icon={!user.avatar && <UserOutlined />}
          style={{ margin: "0 auto 24px", border: "4px solid #1890ff" }}
        />
        <Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
          {user.name}
        </Title>
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
        <Button
          type="primary"
          icon={<SettingOutlined />}
          block
          onClick={() => {
            onCancel();
            onEdit();
          }}
        >
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
    </Modal>
  );
};

export default UserModal;
